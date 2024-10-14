import React, { useEffect, useContext, useState } from "react";
import styles from "./Products_Page.module.css";
import Products from "../../components/Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const initialProducts = [
  {
    name: "The Murli Diamond Gold Ring",
    price: "100", // Price as a number for easier comparison
    metal: "Gold",
    material: "Diamond",
    gender: "unisex",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230519/MLln/6466d27a42f9e729d79a8d5a/-1117Wx1400H-466167376-silver-MODEL4.jpg",
    isBestseller: true,
  },
  {
    name: "The Murli Diamond Gold Necklace",
    price: "499",
    metal: "Gold",
    material: "Emerald",
    gender: "female",
    image:
      "https://s.alicdn.com/@sc04/kf/H76adaf44460c4abb8f91bde25d6d7aa3g.jpg_720x720q50.jpg",
  },
  {
    name: "The Murli Diamond Gold Ear-Ring",
    price: "1000",
    metal: "Gold",
    material: "Diamond",
    gender: "female",
    image:
      "https://i5.walmartimages.com/asr/3f6312db-904b-4fac-87ff-eeba3a783c62.9d7af648517cecfda7d157fcffccb641.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    isBestseller: true,
  },
  {
    name: "The Murli Diamond Gold Chain",
    price: "50", // Price as a number for easier comparison
    metal: "Gold",
    material: "Diamond",
    gender: "unisex",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Murli Diamond Gold Ring-1",
    price: "501",
    metal: "Gold",
    material: "Diamond",
    gender: "female",
    image: "https://i.ebayimg.com/images/g/mdQAAOSwUHNhtUa8/s-l1200.jpg",
  },
  {
    name: "The Murli Diamond Gold pandel",
    price: "1000",
    metal: "Gold",
    material: "Diamond",
    gender: "unisex",
    image:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/5380042/1.jpg?2652",
  },
  {
    name: "The Murli Diamond Gold Ring-1",
    price: "501",
    metal: "Gold",
    material: "Diamond",
    gender: "female",
    image:
      "https://i.etsystatic.com/10840548/r/il/f536ca/1886896047/il_570xN.1886896047_ojih.jpg",
  },
  {
    name: "The Murli Diamond Gold pandel",
    price: "1000",
    metal: "Gold",
    material: "Ruby",
    gender: "unisex",
    image:
      "https://i.etsystatic.com/24254391/r/il/b7fbb5/3372574246/il_570xN.3372574246_a0qw.jpg",
  },
  // Add more product objects as needed
];

function Products_Page() {
  const { products, setProducts } = useContext(Context);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetchDataFromApi("/api/products");
      console.log("API response:", res);
      setProducts(res);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <Products products={products} />
    </>
  );
}

export default Products_Page;
