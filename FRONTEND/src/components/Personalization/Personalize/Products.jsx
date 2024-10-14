import React, { useState } from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import ProductModal from "./ProductModal";

const Products = ({ products, onProductSelect, productType }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
            key={item.name}  // Use name or another unique key as _id is not present in sample data
            id={item.name} 
            data={item}
            onClick={handleProductClick}
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
