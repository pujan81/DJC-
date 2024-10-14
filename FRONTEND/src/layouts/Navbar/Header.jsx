import { useState, useRef, useEffect } from "react";
import { TbSearch, TbMenu2 } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Search from "./Search/Search";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();

  // Create a ref for the user dropdown
  const dropdownRef = useRef(null);

  const handleMenuClick = () => setMenuOpen((prev) => !prev);
  const toggleUserDropdown = () => setUserDropdownOpen((prev) => !prev);

  // Handle click outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    if (userDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userDropdownOpen]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className={styles.mainHeader}>
        <div className={styles.headerContent}>
          <ul className={styles.left}>
            <li>Home</li>
            <li>About</li>
            <li>Consulting</li>
            <li>Blogs</li>
          </ul>
          <div className={styles.center} onClick={handleHomeClick}>
            DJC
          </div>
          <div className={styles.right}>
            <TbSearch onClick={() => setSearchModal(true)} />
            <div className={styles.userIconWrapper}>
              <LuUser onClick={toggleUserDropdown} />
              {userDropdownOpen && (
                <div
                  className={`${styles.userDropdown} ${
                    userDropdownOpen ? styles.active : ""
                  }`}
                  ref={dropdownRef}
                >
                  <button className={styles.dropdownButton}>Login</button>
                </div>
              )}
            </div>
            <span className={styles.cartIcon}>
              <IoBagOutline />
            </span>
            {/* <TbMenu2 className={styles.menuIcon} onClick={handleMenuClick} /> */}
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}

      <div className={`${styles.dropdownMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Consulting</li>
          <li>Blogs</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
