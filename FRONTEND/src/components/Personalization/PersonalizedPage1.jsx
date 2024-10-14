import React, { useState } from "react";
import ImageGallery from "./Personalize/ImageGallery";
import ProductInfo from "./Personalize/ProductInfo";
import styles from "./PersonalizedPage1.module.css";
import DiamondFunnel from "./Personalize/DiamondFunnel";
import Products from "./Personalize/Products";
import GemstoneFilter from "./Personalize/GemstoneFilter";
import Filters from "./Personalize/Filters";
import Propose from "./UploadImage/Propose";
import { useNavigate } from "react-router-dom";

const initialGems = [
  {
    name: "The Murli Diamond Gold Ring",
    price: 10000,
    metal: "Gold",
    material: "Diamond",
    carat: 1.5,
    gender: "unisex",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
    isBestseller: true,
  },
  {
    name: "The Royal Emerald Necklace",
    price: 500000,
    metal: "Gold",
    material: "Emerald",
    carat: 2.0,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Classic Ruby Earrings",
    price: 75000,
    metal: "Gold",
    material: "Ruby",
    carat: 1.2,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
    isBestseller: false,
  },
  {
    name: "The Sapphire Solitaire Ring",
    price: 30000,
    metal: "Platinum",
    material: "Sapphire",
    carat: 1.8,
    gender: "unisex",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Elegant Topaz Bracelet",
    price: 400000,
    metal: "Gold",
    material: "Diamond",
    carat: 2.5,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
    isBestseller: true,
  },
  {
    name: "The Classic Pearl Necklace",
    price: 60000,
    metal: "Silver",
    material: "Diamond",
    carat: 2.0,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Amethyst Gold Pendant",
    price: 20000,
    metal: "Gold",
    material: "Ruby",
    carat: 1.7,
    gender: "unisex",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Citrine Diamond Ring",
    price: 45000,
    metal: "Gold",
    material: "Emerald",
    carat: 1.4,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Ruby Gold Bangle",
    price: 80000,
    metal: "Gold",
    material: "Ruby",
    carat: 2.3,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Elegant Opal Earrings",
    price: 350000,
    metal: "Gold",
    material: "Sapphire",
    carat: 1.9,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
  },
  {
    name: "The Luxurious Garnet Necklace",
    price: 90000,
    metal: "Gold",
    material: "Ruby",
    carat: 2.6,
    gender: "female",
    image:
      "https://i.pinimg.com/736x/e3/a6/ea/e3a6ea97f338150c3a0ec599c5b371b8.jpg",
    isBestseller: true,
  },
];

const initialSettings = [
  {
    name: "The Murli Diamond Gold Ring",
    price: 10000,
    metal: "Gold",
    material: "Diamond",
    carat: 1.5,
    gender: "unisex",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
    isBestseller: true,
  },
  {
    name: "The Royal Emerald Necklace",
    price: 500000,
    metal: "Gold",
    material: "Emerald",
    carat: 2.0,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Classic Ruby Earrings",
    price: 75000,
    metal: "Gold",
    material: "Ruby",
    carat: 1.2,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
    isBestseller: false,
  },
  {
    name: "The Sapphire Solitaire Ring",
    price: 30000,
    metal: "Platinum",
    material: "Sapphire",
    carat: 1.8,
    gender: "unisex",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Elegant Topaz Bracelet",
    price: 400000,
    metal: "Gold",
    material: "Diamond",
    carat: 2.5,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
    isBestseller: true,
  },
  {
    name: "The Classic Pearl Necklace",
    price: 60000,
    metal: "Silver",
    material: "Diamond",
    carat: 2.0,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Amethyst Gold Pendant",
    price: 20000,
    metal: "Gold",
    material: "Ruby",
    carat: 1.7,
    gender: "unisex",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Citrine Diamond Ring",
    price: 45000,
    metal: "Gold",
    material: "Emerald",
    carat: 1.4,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Ruby Gold Bangle",
    price: 80000,
    metal: "Gold",
    material: "Ruby",
    carat: 2.3,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Elegant Opal Earrings",
    price: 350000,
    metal: "Gold",
    material: "Sapphire",
    carat: 1.9,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
  },
  {
    name: "The Luxurious Garnet Necklace",
    price: 90000,
    metal: "Gold",
    material: "Ruby",
    carat: 2.6,
    gender: "female",
    image:
      "https://img.pikbest.com/ai/illus_our/20230529/70ac483d138e0e73cd675ac6fa1b5f78.jpg!w700wp",
    isBestseller: true,
  },
];

const filterGems = (gems, filters) => {
  return gems.filter((gem) => {
    const matchesGemstone =
      !filters.selectedGemstone || gem.material === filters.selectedGemstone;
    const matchesPrice = gem.price >= filters.minPrice;
    const matchesCarat = !filters.minCarat || gem.carat >= filters.minCarat;

    return matchesGemstone && matchesPrice && matchesCarat;
  });
};

const PersonalizedPage1 = ({checkPageOne}) => {
  const [filteredGems, setFilteredGems] = useState(initialGems);
  const [selectedGem, setSelectedGem] = useState(null);
  const [filteredSettings, setFilteredSettings] = useState(initialSettings);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [chooseGem, setChooseGem] = useState(true);
  const [chooseSetting, setChooseSetting] = useState(false);
  const [isPageOne, setIsPageOne] = useState(checkPageOne);
  const navigate = useNavigate();

  const handleApplyFilters = (filters) => {
    const newFilteredGems = filterGems(initialGems, filters);
    setFilteredGems(newFilteredGems);
  };

  const handleResetFilters = () => {
    setFilteredGems(initialGems);
  };

  const handleGemSelect = (gem) => {
    setSelectedGem(gem);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleSettingSelect = (setting) => {
    setSelectedSetting(setting);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleRemoveGem = () => {
    setSelectedGem(null);
  };

  const handleRemoveSetting = () => {
    setSelectedSetting(null);
  };
  // settings filter
  const handleFilterChange = (filter, value) => {
    setAppliedFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [filter]: value };

      if (!value) {
        delete newFilters[filter];
      }

      return newFilters;
    });
  };

  React.useEffect(() => {
    let filtered = [...initialSettings];
    for (const [filter, value] of Object.entries(appliedFilters)) {
      if (filter === "price") {
        if (value === "under-100") {
          filtered = filtered.filter((product) => product.price <= 100);
        } else if (value === "under-500") {
          filtered = filtered.filter((product) => product.price <= 500);
        } else if (value === "under-1000") {
          filtered = filtered.filter((product) => product.price <= 1000);
        }
      } else if (filter === "category") {
        filtered = filtered.filter(
          (product) => product.metal.toLowerCase() === value.toLowerCase()
        );
      } else if (filter === "material") {
        filtered = filtered.filter(
          (product) => product.material.toLowerCase() === value.toLowerCase()
        );
      } else if (filter === "gender") {
        filtered = filtered.filter(
          (product) => product.gender.toLowerCase() === value.toLowerCase()
        );
      }
    }

    setFilteredSettings(filtered);
  }, [appliedFilters, initialSettings]);
  //
  const handleChooseGem = () => {
    setChooseGem(true);
    setChooseSetting(false);
    setAppliedFilters({});
  };

  const handleChooseSetting = () => {
    setChooseGem(false);
    setChooseSetting(true);
    setFilteredGems(initialGems);
  };

  const handlePage1 = () => {
    setIsPageOne(true);
    navigate("/personalize");
  };

  const handlePage2 = () => {
    setIsPageOne(false);
    navigate("/uploadIdea");
  };

  return (
    <div className={styles.Personalized}>
      <div className={styles.title}>
        <h1>PERSONALIZE YOUR SPARKLE</h1>
        <div className={styles.btns}>
          <button
            className={isPageOne ? styles.button51 : styles.button50}
            onClick={handlePage1}
          >
            ALCHEMY
          </button>
          <button
            className={isPageOne ? styles.button50 : styles.button51}
            onClick={handlePage2}
          >
            PROPOSE
          </button>
        </div>
      </div>
      {isPageOne ? (
        <div className={styles.container}>
          <div className={styles.PersonalizedPage1}>
            <div className={styles.leftColumn}>
              <ImageGallery
                selectedGem={selectedGem}
                selectedSetting={selectedSetting}
              />
            </div>
            <div className={styles.rightColumn}>
              <ProductInfo
                selectedGem={selectedGem}
                selectedSetting={selectedSetting}
              />
            </div>
          </div>
          <div className={styles.funnelContainer}>
            <DiamondFunnel
              selectedGem={selectedGem}
              onRemoveGem={handleRemoveGem}
              selectedSetting={selectedSetting}
              onRemoveSetting={handleRemoveSetting}
              onChooseDiamond={handleChooseGem}
              onChooseSetting={handleChooseSetting}
            />
          </div>
          {chooseGem && (
            <GemstoneFilter
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
          )}
          {chooseSetting && <Filters onFilterChange={handleFilterChange} />}
          {chooseGem ? (
            <Products
              products={filteredGems}
              onProductSelect={handleGemSelect}
              productType={"gem"}
            />
          ) : (
            <Products
              products={filteredSettings}
              onProductSelect={handleSettingSelect}
              productType={"setting"}
            />
          )}
        </div>
      ) : (
        <Propose />
      )}
    </div>
  );
};

export default PersonalizedPage1;
