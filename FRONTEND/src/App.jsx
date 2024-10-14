import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./layouts/Navbar/Header";
import Footer from "./layouts/Footer/Footer";
import Preloader from "./layouts/Preloader/Preloader";
import Home_Page from "./pages/Home/home_page";
import Products_Page from "./pages/Products/Products_Page";
import SingleProduct_Page from "./pages/SingleProduct/SingleProduct_Page";
import Personalize_Page from "./pages/Customization/Customization_Page";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./utils/RefreshHandler";
import Login from "./components/Auth/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  useEffect(() => {
    if (userInfo) {
      setIsAuthenticated(true);
    }
  }, [userInfo]);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const AdminRoute = ({ element }) => {
    return isAdmin ? element : <Navigate to="/" />;
  };
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <RefreshHandler setisAuthenticated={setIsAuthenticated} />
        <MainContent
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

const MainContent = ({ isAuthenticated, setIsAuthenticated }) => {

  
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const AdminRoute = ({ element }) => {
    return isAdmin ? element : <Navigate to="/" />;
  };
  const location = useLocation();
  const GoogleAuthWrapper = () => (
    <GoogleOAuthProvider clientId="522736900594-495381hqv5ueu8ie1qgvhf5ji4kt2f1i.apps.googleusercontent.com">
      <Login setIsAuthenticated={setIsAuthenticated} />
    </GoogleOAuthProvider>
  );

  return (
    <>
      {location.pathname !== "/login" && (
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      )}
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper/>} />
        <Route path="/" element={<Home_Page />} />
        <Route path="/home" element={<Home_Page />} />
        <Route path="/products" element={<Products_Page />} />
        <Route path="/products/:prodId" element={<SingleProduct_Page />} />
        <Route
          path="/personalize"
          element={<Personalize_Page checkPageOne={true} />}
        />
        <Route
          path="/uploadIdea"
          element={<Personalize_Page checkPageOne={false} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
