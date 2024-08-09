import React, { useState } from "react";
import "./Login.css";
import FormContainer from "./FormContainer";
import ToggleContainer from "./ToggleContainer";

function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <FormContainer type="sign-up" />
      <FormContainer type="sign-in" />
      <ToggleContainer
        isActive={isActive}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default Login;
