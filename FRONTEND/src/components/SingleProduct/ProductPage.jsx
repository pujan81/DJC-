// ProductPage.jsx
import React from "react";
import styles from "./ProductPage.module.css";
import ImageGallery from "./Details/ImageGallery";
import ProductInfo from "./Details/ProductInfo";
import ProductDetails from "./Details/ProductDetails";
import CustomerReview from "./Details/CustomerReview";
import FeatureIcons from "./Details/FeatureIcons";

const ProductPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.productPage}>
      <div className={styles.leftColumn}>
        <ImageGallery />
      </div>
      <div className={styles.rightColumn}>
        <ProductInfo />
        <ProductDetails />
        <FeatureIcons />
        <CustomerReview />
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
