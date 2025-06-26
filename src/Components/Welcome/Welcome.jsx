import react from "react";
import styles from "./Welcome.module.css";

const Welcome = ({ firstName, lastName }) => {
  return (
    <div className={styles.container}>
      <h2>Welcome {`${firstName} ${lastName}`}</h2>
    </div>
  );
};

export default Welcome;
