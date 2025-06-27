import React, { useState } from "react";
import styles from "./ImageUpload.module.css";

const ImageUpload = ({ onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      onUpload(URL.createObjectURL(file)); // resmi dışa gönder (prop ile)
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h3>Fotoğraf Yükle</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <p>Yüklenen dosya: <strong>{selectedImage.name}</strong></p>
      )}
    </div>
  );
};

export default ImageUpload;
