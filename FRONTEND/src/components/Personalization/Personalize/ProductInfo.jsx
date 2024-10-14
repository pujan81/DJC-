// ProductInfo.jsx
import React from "react";
import styles from "./ProductInfo.module.css";

const ProductInfo = ({ selectedGem, selectedSetting }) => {
  const calculateTotal = () => {
    if (selectedGem && selectedSetting) {
      return selectedGem.price + selectedSetting.price;
    }
    return null;
  };

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.title}>
        {selectedGem == null ? "Select a Gemstone" : selectedGem.name} +
        {selectedSetting == null
          ? " Select a Setting"
          : " " + selectedSetting.name}
      </h1>
      <p className={styles.type}>Personalized Product</p>
      <div className={styles.pricing}>
        <span className={styles.price}>
          {!selectedGem || !selectedSetting
            ? "No price available"
            : "₹" + selectedGem.price.toLocaleString() + " + " + "₹" + selectedSetting.price.toLocaleString()}
        </span>
        {selectedGem && selectedSetting && (
          <span className={styles.price}>
            <p className={styles.type}>Total Amount</p>
            {"₹" + calculateTotal().toLocaleString()}
          </span>
        )}
      </div>
      <p className={styles.taxes}>(Inclusive of all taxes)</p>
      <div className={styles.size}>
        <label htmlFor="size">SIZE:</label>
        <select id="size">
          <option>Select Size</option>
          <option>Select Size</option>
          <option>Select Size</option>
          <option>Select Size</option>
        </select>
      </div>
      <div className={styles.actions}>
        <button className={styles.button50}>ADD TO CART</button>
        <button className={styles.button51}>BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductInfo;
