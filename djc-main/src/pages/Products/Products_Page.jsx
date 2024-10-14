import styles from "./Products_Page.module.css";
import Products from "../../components/Products/Products";

const initialProducts = [
  {
    name: "The Murli Diamond Gold Ring",
    price: "100", // Price as a number for easier comparison
    metal: "Gold",
    material: "Diamond",
    gender: "unisex",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
    isBestseller: true,
  },
  {
    name: "The Murli Diamond Gold Necklace",
    price: "499",
    metal: "Gold",
    material: "Emerald",
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Murli Diamond Gold Ear-Ring",
    price: "1000",
    metal: "Gold",
    material: "Diamond",
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
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
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Murli Diamond Gold pandel",
    price: "1000",
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
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Murli Diamond Gold pandel",
    price: "1000",
    metal: "Gold",
    material: "Ruby",
    gender: "unisex",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  // Add more product objects as needed
];

function Products_Page() {
  return (
    <>
      <Products products={initialProducts} />
    </>
  );
}

export default Products_Page;
