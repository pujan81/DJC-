import "./home_page.module.css";
import Home from "../../components/Home/Home";
import Service from "../../components/Servicee/Service";
import Featured from "../../components/Featured/Featured";
import Category from "../../components/Category/Category";
import Review from "../../components/Review/Review";

function Home_Page() {
  return (
    <>
      <Home />
      <Service />
      <Featured />
      <Category />
      <Review />
    </>
  );
}

export default Home_Page;
