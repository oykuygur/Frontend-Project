import React, { useState } from "react";
import styles from "./Welcome.module.css";

const Welcome = ({ firstName, lastName }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleBox}>
        Welcome {`${firstName || ""} ${lastName || ""}`}
      </h2>
    </div>
  );
};

export default Welcome;
