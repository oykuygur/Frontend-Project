import React from "react";
import styles from "./ImageView.module.css";

const ImageView = ({ imageUrl }) => {
  return (
    <div className={styles.viewContainer}>
      <h3>Yüklenen Görsel</h3>
      {imageUrl ? (
        <img src={imageUrl} alt="Yüklenen" className={styles.previewImage} />
      ) : (
        <p>Henüz bir görsel yüklenmedi.</p>
      )}
    </div>
  );
};

export default ImageView;