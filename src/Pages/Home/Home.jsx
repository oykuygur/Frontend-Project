import React from "react";
import Welcome from "../../Components/Welcome/Welcome";
import { useLocation } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const { firstName, lastName } = location.state || {};

  return (
    <div className={styles.container}>
      <Welcome firstName={firstName} lastName={lastName}></Welcome>
    </div>
  );
};

export default Home;
