import React from "react";
import styles from "./LoginContainer.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const LoginContainer = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const userName = event.target.userName.value;
    const password = event.target.password.value;

    console.log("Form verileri:");
    console.log("Ad:", firstName);
    console.log("Soyad:", lastName);
    console.log("Username:", userName);
    console.log("Şifre:", password);

    if (userName === "oykuygur" && password === "admin1") {
      onLoginSuccess(formData);
    } else {
      alert("Username or password is wrong");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br/>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="userName">
            <FaUser style={{ marginRight: "8px" }} />
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">
            <FaLock style={{ marginRight: "8px" }} />
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginContainer;
