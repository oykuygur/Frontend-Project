import react from "react";
import LoginContainer from "../../Components/LoginContainer/LoginContainer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (formData) => {
    navigate("/home", { state: formData });
  };

  return (
    <div>
      <LoginContainer onLoginSuccess={handleLoginSuccess}></LoginContainer>
    </div>
  );
};

export default Login;
