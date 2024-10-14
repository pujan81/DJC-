import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./Product.module.css";
import { useNavigate } from "react-router-dom";

const Product = ({ data, id }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleProductClick = () => {
    navigate("/products/" + 123);
  };

  return (
    <div className={styles.productCard} onClick={handleProductClick}>
      <div className={styles.thumbnail}>
        <img src={data.image} alt={data.name} />
        <button className={styles.wishlistButtonr} onClick={toggleWishlist}>
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className={styles.prodDetails}>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.price}>&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
