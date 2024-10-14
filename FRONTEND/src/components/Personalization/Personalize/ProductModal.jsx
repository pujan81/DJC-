import React from "react";
import styles from "./ProductModal.module.css";

const ProductModal = ({ data, onClose, onSelectDiamond, productType }) => {
  const handleSelect = () => {
    onSelectDiamond(data); // Pass the selected product data back to PersonalizedPage1
    onClose(); // Close the modal after selection
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            <img src={data.image} alt={data.name} />
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.productName}>{data.name}</h2>
            <span className={styles.price}>&#8377;{data.price}</span>
            <p className={styles.detailItem}><strong>Metal:</strong> {data.metal}</p>
            <p className={styles.detailItem}><strong>Material:</strong> {data.material}</p>
            <p className={styles.detailItem}><strong>Carat:</strong> {data.carat}</p>
            <p className={styles.detailItem}><strong>Gender:</strong> {data.gender}</p>
            {data.isBestseller && <span className={styles.bestseller}>Bestseller</span>}
            <button className={styles.button51} onClick={handleSelect}>{productType === "gem" ? "Select Gem" : "Select Setting" }</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
