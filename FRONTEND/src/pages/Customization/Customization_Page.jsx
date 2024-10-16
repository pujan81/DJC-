import React, { useEffect, useContext, useState } from "react";
import PersonalizedPage1 from "../../components/Personalization/PersonalizedPage1";
import styles from "./Customization_Page.module.css";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

function Personalize_Page({ checkPageOne }) {
  const [gemstones, setGemstones] = useState([]);
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    const getGemstones = async () => {
      try {
        const res = await fetchDataFromApi("/api/gemstones");
        // console.log(res);
        setGemstones(res);
      } catch (error) {
        setGemstones([]);
      }
    };

    getGemstones();
  }, [setGemstones]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchDataFromApi("/api/products");
        // console.log(res);
        setProducts(res.length > 0 ? res : initialProducts);
      } catch (error) {
        setProducts(initialProducts);
      }
    };

    getProducts();
  }, [setProducts]);

  return (
    <>
      <PersonalizedPage1
        checkPageOne={checkPageOne}
        initialGems={gemstones}
        initialSettings={products}
      />
    </>
  );
}

export default Personalize_Page;
