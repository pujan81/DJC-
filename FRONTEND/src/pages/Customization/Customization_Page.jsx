import PersonalizedPage1 from "../../components/Personalization/PersonalizedPage1";
import styles from "./Customization_Page.module.css";

function Personalize_Page({checkPageOne}) {
  return (
    <>
      <PersonalizedPage1 checkPageOne={checkPageOne}/>
    </>
  );
}

export default Personalize_Page;
