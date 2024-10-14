import React from "react";
import styles from "./Product.module.css";

const Product = ({ data, onClick }) => {
  return (
    <div className={styles.productCard} onClick={() => onClick(data)}>
      <div className={styles.thumbnail}>
        <img src={data.image} />
      </div>
      <div className={styles.prodDetails}>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.price}>&#8377;{data.price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Product;
