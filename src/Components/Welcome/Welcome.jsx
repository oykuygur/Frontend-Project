
import React, { useState } from "react";
import styles from "./Welcome.module.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import ImageView from "../ImageView/ImageView";

const Welcome = ({ firstName, lastName }) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className={styles.container}>
      <h2>Welcome {`${firstName || ""} ${lastName || ""}`}</h2>

      <ImageUpload onUpload={setImageUrl} />
      <ImageView imageUrl={imageUrl} />
    </div>
  );
};

export default Welcome;
