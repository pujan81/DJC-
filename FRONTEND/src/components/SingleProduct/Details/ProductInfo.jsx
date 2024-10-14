// ProductInfo.jsx
import React from "react";
import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={styles.productInfo}>
      <h1 className={styles.title}>The Murli Diamond Gold Ring</h1>
      <p className={styles.jeweller}>
        By DJC Jeweller | Product Code: OOZER00117MM-FXY20
      </p>
      <p className={styles.type}>GOLD RING</p>
      <div className={styles.pricing}>
        <span className={styles.price}>₹15,915</span>
        <span className={styles.savings}>You Save ₹600</span>
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
