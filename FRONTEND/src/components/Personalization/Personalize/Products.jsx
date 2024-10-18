import React, { useState } from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import ProductModal from "./ProductModal";

const Products = ({ products, onProductSelect, productType }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // console.log(products);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.productsContainer}>
      <div className={styles.products}>
        {products.map((item) => (
          <Product
            key={item._id}
            id={item._id}
            data={item}
            onClick={handleProductClick}
            productType={productType}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          data={selectedProduct}
          onClose={closeModal}
          onSelectDiamond={onProductSelect}
          productType={productType}
        />
      )}
    </div>
  );
};

export default Products;
