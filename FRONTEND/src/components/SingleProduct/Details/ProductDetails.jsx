// ProductDetails.jsx
import React from 'react';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  return (
    <div className={styles.productDetails}>
      <h2>Product Details</h2>
      <div className={styles.section}>
        <h3>Metal Information</h3>
        <div className={styles.content}></div>
      </div>
      <div className={styles.section}>
        <h3>Product Information</h3>
        <div className={styles.content}></div>
      </div>
      <div className={styles.section}>
        <h3>Diamond Information</h3>
        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default ProductDetails;