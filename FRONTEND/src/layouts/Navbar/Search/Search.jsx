import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  // Fetch data from the public API
  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setData([]);
        return;
      }

      try {
        const response = await fetch(
          `https://api.akshitaraayurved.com/api/products/query/${query}`
        );
        const result = await response.json();
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className={styles.searchModal}>
      <div className={styles.formField}>
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={onChange}
          className={styles.input}
        />
        <MdClose
          className={styles.closeBtn}
          onClick={() => setSearchModal(false)}
        />
      </div>
      <div className={styles.searchResultContent}>
        {!query.length ? (
          <div className={styles.startMsg}>
            Start typing to see products you are looking for...
          </div>
        ) : !data.length ? (
          <div className={styles.startMsg}>
            No products found matching your search.
          </div>
        ) : (
          <div className={styles.searchResults}>
            {data.map((item) => (
              <div
                className={styles.searchResultItem}
                key={item._id}
                onClick={() => {
                  navigate("/product/" + item._id);
                  setSearchModal(false);
                }}
              >
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.prodDetails}>
                  <span className={styles.name}>{item.product_name}</span>
                  <span className={styles.desc}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
