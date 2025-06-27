import React, { useState } from "react";
import styles from "./ImageUpload.module.css";
import { FaCamera, FaUpload } from "react-icons/fa";

const ImageUpload = ({ onUpload }) => {
  const [selectedImage, setSelectedImage] = useState('');
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      onUpload(URL.createObjectURL(file)); // resmi dışa gönder (prop ile)
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h3><FaUpload/> Upload A Photo</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <p>Uploaded File: <strong>{selectedImage.name}</strong></p>
      )}
    </div>
  );
};

export default ImageUpload;
