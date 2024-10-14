import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (filter) => (event) => {
    onFilterChange(filter, event.target.value);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.left}>
        <label htmlFor="price-filter">FILTER BY:</label>
        <select id="price-filter" onChange={handleFilterChange('price')}>
          <option value="">PRICE</option>
          <option value="under-100">Under ₹100</option>
          <option value="under-500">Under ₹500</option>
          <option value="under-1000">Under ₹1000</option>
        </select>

        <select id="category-filter" onChange={handleFilterChange('category')}>
          <option value="">CATEGORY</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="platinum">Platinum</option>
        </select>

        <select id="material-filter" onChange={handleFilterChange('material')}>
          <option value="">MATERIAL</option>
          <option value="diamond">Diamond</option>
          <option value="ruby">Ruby</option>
          <option value="emerald">Emerald</option>
        </select>

        <select id="gender-filter" onChange={handleFilterChange('gender')}>
          <option value="">GENDER</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      <div className={styles.right}>
        <label htmlFor="sort-by-filter">SORT BY:</label>
        <select id="sort-by-filter" onChange={handleFilterChange('sort')}>
          <option value="">DEFAULT</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
