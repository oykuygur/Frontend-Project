import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Welcome from "../../Components/Welcome/Welcome";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import ImageView from "../../Components/ImageView/ImageView";
import styles from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const { firstName, lastName } = location.state || {};
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.welcomeWrapper}>
        <Welcome firstName={firstName} lastName={lastName} />
      </div>

      <div className={styles.grid}>
        <ImageUpload onUpload={setImageUrl} />
        <ImageView imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default Home;

