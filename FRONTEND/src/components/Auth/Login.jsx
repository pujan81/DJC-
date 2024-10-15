import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { googleAuth } from "../../utils/api";
import { IoLeafOutline } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { email, name, image, user_id } = result.data.user;
        const isAdmin = user_id === import.meta.env.VITE_ADMIN_USER_ID;
        console.log("User is admin:", isAdmin);

        const token = result.data.token;
        const obj = { email, name, image, user_id, token, isAdmin };

        localStorage.setItem("user-info", JSON.stringify(obj));

        // Update the authentication state
        setIsAuthenticated(true);

        // Navigate to the home page after successful login
        navigate("/");
      }
    } catch (err) {
      console.error("Error during Google authentication:", err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => {
      console.error("Google login error:", error);
    },
    flow: "auth-code",
  });

  return (
    <div className={styles.loginPage}>
      <RiArrowGoBackLine className={styles.homeIcon} onClick={() => navigate("/")} />
      <div className={styles.loginContainer}>
        <IoLeafOutline className={styles.loginIcon} />
        <h1 className={styles.heading}>Welcome to THE DJC</h1>
        <p className={styles.paragraph}>Where Glory Meets Shine</p>
        <button onClick={googleLogin} className={styles.googleLoginButton}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
