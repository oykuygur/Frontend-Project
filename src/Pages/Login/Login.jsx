import react from "react";
import LoginContainer from "../../Components/LoginContainer/LoginContainer";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (formData) => {
    navigate("/home", { state: formData });
  };

  return (
    <div className={styles.container}>
      <LoginContainer onLoginSuccess={handleLoginSuccess}></LoginContainer>
    </div>
  );
};

export default Login;
