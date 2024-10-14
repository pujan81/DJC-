import React, { useState, useRef } from "react";
import styles from "./Propose.module.css";

const PersonalizePage = () => {
  const [images, setImages] = useState([]);
  const [number, setNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [size, setSize] = useState("");
  const [details, setDetails] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (files) => {
    const newImages = [...images, ...Array.from(files)];
    setImages(newImages.slice(0, 5)); // Limit to 5 images
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleImageUpload(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ images, number, budget, size, details });
  };

  const handleMainImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
    <p className={styles.aboutFeature}>Bring your vision to life! Upload up to 5 images of your dream jewellery design. Each submission is carefully evaluated for feasibility by our expert team. You will receive timely notifications regarding the status of your design, ensuring a smooth and engaging experience in custom jewellery creation. </p>
    <div className={styles.personalizePage}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <div className={styles.imageGrid}>
            <div className={styles.smallImages}>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className={styles.smallImage}>
                  {images[index] && (
                    <div className={styles.imageContainer}>
                      <img
                        src={URL.createObjectURL(images[index])}
                        alt={`Upload ${index}`}
                      />
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDeleteImage(index)}
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={styles.mainImage}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={handleMainImageClick}
            >
              {images[0] ? (
                <div className={styles.imageContainer}>
                  <img src={URL.createObjectURL(images[0])} alt="Main upload" />
                  <button
                    className={styles.deleteBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage(0);
                    }}
                  >
                    &times;
                  </button>
                </div>
              ) : (
                <p>Drop image or Click to Upload</p>
              )}
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={(e) => handleImageUpload(e.target.files)}
            multiple
            accept="image/*"
            className={styles.fileInput}
            style={{ display: "none" }}
          />
        </div>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Your number"
              className={styles.input}
            />
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Your Budget (in numbers)"
              className={styles.input}
              max={9999999999}
            />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className={styles.select}
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Details of Jewellery"
              className={styles.textarea}
            />
            <button type="submit" className={styles.button50}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default PersonalizePage;
