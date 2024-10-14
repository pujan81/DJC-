import React, { useEffect, useRef } from "react";
import "./home.css";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { useNavigate } from "react-router-dom";
import djc_bg_logo from "../../assets/temp0_bgless.png";
import DiamondRing from "./Diamond_Ring/DiamondRenderer";

const Home = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dracoLoader = new DRACOLoader();
    const loader = new GLTFLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    dracoLoader.setDecoderConfig({ type: "js" });
    loader.setDRACOLoader(dracoLoader);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xc0c0c0);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    containerRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.set(34, 16, -20);
    scene.add(camera);

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    loader.load("src/assets/diamond.glb", function (gltf) {
      gltf.scene.traverse((obj) => {
        if (obj.isMesh) {
          sampler = new MeshSurfaceSampler(obj).build();
        }
      });
      transformMesh();
    });

    let sampler;
    let pointsGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const tempPosition = new THREE.Vector3();

    function transformMesh() {
      for (let i = 0; i < 3000; i++) {
        sampler.sample(tempPosition);
        vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
      }

      pointsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x4ee2ec,
        size: 0.1,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
        sizeAttenuation: true,
        alphaMap: new THREE.TextureLoader().load(
          "src/assets/particle-texture.jpg",
          (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
          }
        ),
      });

      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);
    }

    function introAnimation() {
      controls.enabled = false;

      new TWEEN.Tween(camera.position.set(-1, -0.1, 0))
        .to({ x: 2, y: -0.9, z: 5 }, 6500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
        .onComplete(function () {
          controls.enabled = true;
          const titleElement = document.querySelector(".main--title");
          if (titleElement) {
            titleElement.classList.add("ended");
          }
          setOrbitControlsLimits();
          TWEEN.remove(this);
        });
    }

    introAnimation();

    function setOrbitControlsLimits() {
      controls.enableDamping = true;
      controls.dampingFactor = 0.04;
      controls.minDistance = 0.5;
      controls.maxDistance = 9;
      controls.enableRotate = true;
      controls.autoRotate = true;
    }

    const renderPass = new RenderPass(scene, camera);
    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    composer.addPass(renderPass);

    scene.background = new THREE.Color(0x000010);

    const clock = new THREE.Clock();
    function renderLoop() {
      TWEEN.update();
      controls.update();
      composer.render();
      requestAnimationFrame(renderLoop);
    }

    renderLoop();

    return () => {
      renderer.dispose();
      pointsGeometry.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      controls.dispose();
    };
  }, []);

  const handleBuyNowClick = () => {
    navigate("/products");
  };

  const handlePersonlize = () => {
    navigate("/personalize");
  };

  const handleUploadIdea = () => {
    navigate("/uploadIdea");
  }

  return (
    <section id="home">
      <div className="main--container" ref={containerRef}>
        <h1 className="main--title"></h1>
        <div className="logo-bg">
          <img src={djc_bg_logo} alt="hel" />
        </div>
      </div>

      <div className="container">
        <h1>Diamond Jewellery Company</h1>
        <h3>
          Step into a world of luxury with our exquisite selection of diamond
          and gold jewellery. Each piece is a masterpiece, crafted with
          precision and passion to elevate your style and make every moment
          unforgettable. Begin your journey to brilliance now.
        </h3>
        <button className="button-74" role="button" onClick={handleBuyNowClick}>
          BUY NOW
        </button>
        <div className="custom">
          <div className="diamond-cont">
            <DiamondRing />
          </div>
          <div className="left">
            <h1>Personalize Your Sparkle</h1>
            <p>
              Explore our custom jewellery design studio and craft personalized
              rings, necklaces, bracelets, or earrings with ease. Start by
              selecting your base metal and style, add your choice of gemstones,
              and customize with settings and engravings. Our intuitive design
              tool makes the process simple and fun.
            </p>
            <h3>Have a Design in Mind?</h3>
            <p>
              Upload an image of your desired jewellery, and our skilled
              artisans will bring it to life with impeccable craftsmanship.
            </p>
            <button className="button-74" role="button" onClick={handlePersonlize}>
              Personalize
            </button>
            <button className="button-74" role="button" onClick={handleUploadIdea}>
              Upload Image
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
