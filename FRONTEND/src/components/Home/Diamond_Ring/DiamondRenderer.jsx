import React, { useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

const DiamondRing = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const groupRef = useRef(null);
  const animationIdRef = useRef(null);

  const materials = useMemo(() => [
    new THREE.LineBasicMaterial({ color: 0xf1e5ac, transparent: true, opacity: 0.5 }),
    new THREE.LineBasicMaterial({ color: 0xe8e4c9, transparent: true, opacity: 0.5 }),
    new THREE.LineBasicMaterial({ color: 0xeee8aa, transparent: true, opacity: 0.5 }),
    new THREE.LineBasicMaterial({ color: 0xede275, transparent: true, opacity: 0.5 }),
  ], []);

  const createPath = useCallback((index, sampler) => {
    const geometry = new THREE.BufferGeometry();
    const material = materials[index % 4];
    const line = new THREE.Line(geometry, material);
    const vertices = [];
    const tempPosition = new THREE.Vector3();
    
    sampler.sample(tempPosition);
    vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
    
    const previousPoint = tempPosition.clone();
    
    return { geometry, line, vertices, previousPoint, update: () => {} };
  }, [materials]);

  const initScene = useCallback(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    camera.position.set(0, 100, 220);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    
    const group = new THREE.Group();
    scene.add(group);
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    groupRef.current = group;
    
    return { scene, camera, renderer, controls, group };
  }, []);

  const loadModel = useCallback((scene, group) => {
    const loader = new OBJLoader();
    loader.load(
      "src/assets/diamond_ring3.obj",
      (obj) => {
        group.clear();
        const mesh = obj.children[0];
        if (mesh?.geometry?.isBufferGeometry) {
          const sampler = new MeshSurfaceSampler(mesh).build();
          const paths = Array.from({ length: 4 }, (_, i) => createPath(i, sampler));
          paths.forEach(path => group.add(path.line));
          
          const scaleFactor = 400;
          group.scale.set(scaleFactor, scaleFactor, scaleFactor);
          group.position.set(0, -30, 0);
          
          startAnimation(paths, sampler);
        } else {
          console.error("Mesh or BufferGeometry not found in the loaded object.");
        }
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (err) => console.error(err)
    );
  }, [createPath]);

  const startAnimation = useCallback((paths, sampler) => {
    let pathsCompleted = false;
    const tempPosition = new THREE.Vector3();
    const maxVertices = 10000;
    const maxDistance = 0.03;

    const updatePath = (path) => {
      if (pathsCompleted) return;

      let pointFound = false;
      while (!pointFound) {
        sampler.sample(tempPosition);
        const distance = tempPosition.distanceTo(path.previousPoint);

        if (distance < maxDistance) {
          path.vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
          path.previousPoint.copy(tempPosition);
          pointFound = true;
        }
      }

      if (path.vertices.length >= maxVertices) {
        pathsCompleted = true;
      }

      path.geometry.setAttribute('position', new THREE.Float32BufferAttribute(path.vertices, 3));
    };

    const animate = () => {
      if (groupRef.current) groupRef.current.rotation.y += 0.002;

      if (!pathsCompleted) {
        paths.forEach(updatePath);
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const { controls, group } = initScene();
    loadModel(sceneRef.current, group);

    const handleResize = () => {
      const { current: camera } = cameraRef;
      const { current: renderer } = rendererRef;
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationIdRef.current) {
          loadModel(sceneRef.current, groupRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [initScene, loadModel]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default DiamondRing;