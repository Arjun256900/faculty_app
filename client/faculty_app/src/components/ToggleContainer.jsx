import React from "react";

function ToggleContainer({ isActive, handleRegisterClick, handleLoginClick }) {
  return (
    <div className={`toggle-container ${isActive ? "active" : ""}`}>
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome back!</h1>
          <p>Enter your personal details to get started with the site</p>
          <button className="hidden" id="login" onClick={handleLoginClick}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello there!</h1>
          <p>Register with your college email to get started with the site</p>
          <button
            className="hidden"
            id="register"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleContainer;
