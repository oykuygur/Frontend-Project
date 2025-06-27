import React from "react";
import styles from "./ImageView.module.css";
import { FaCamera, FaPhotoVideo } from "react-icons/fa";

const ImageView = ({ imageUrl }) => {
  return (
    <div>
      <div className={styles.viewContainer}>
        <h3><FaPhotoVideo/>  View Photo</h3>
        {imageUrl ? (
          <img src={imageUrl} alt="Yüklenen" className={styles.previewImage} />
        ) : (
        <p>No images have been viewed yet.</p>
        )}
      </div>
    </div>
  );
};

export default ImageView;