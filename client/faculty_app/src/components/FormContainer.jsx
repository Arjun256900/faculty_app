import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "./DropDown.jsx";
import { options, departments } from "../assets/formData.js";

axios.defaults.baseURL = "http://localhost:3000";

function FormContainer({ type }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);

  function handleOptionClick(e) {
    setSelectedOption(e);
    setIsOpen(false);
  }

  function handleOpenClick() {
    setIsOpen(!isOpen);
  }
  function handleSecondOpen() {
    setIsSecondOpen(!isSecondOpen);
  }
  async function handleSelectDepartment(e) {
    setSelectedDepartment(e);
    setIsSecondOpen(!isSecondOpen);
    setFormData({ formData, name: "" });
    try {
      const res = await axios.get(`/api/auth/hod?department=${e.value}`);
      console.log(res.data);
      setFormData({ ...formData, name: res.data.name , email: res.data.email});
    } catch (e) {
      console.log("Error populating the name field : ");
      console.error("Error FormContainer.jsx : " + e);
    }
  }
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type == "sign-up") {
      try {
        const res = await axios.post("/api/auth/registerHOD", {
          name,
          email,
          password,
        });
        console.log("User registered : ", res.data);
        navigate("/dashboard");
        // Add token to local storage
        localStorage.setItem("token", res.data.token);
      } catch (e) {
        setError(!error);
        console.error("Error in FormContainer.jsx : " + e);
      }
    } else if (type == "sign-in") {
      try {
        const res = await axios.post("/api/auth/loginHOD", {
          email,
          password,
        });
        console.log("User logged in : ", res.data);
        navigate("/dashboard");
        // Add token to local storage
        localStorage.setItem("token", res.data.token);
      } catch (e) {
        setError(!error);
        console.error("Error FormContainer.jsx : " + e);
      }
    }
  };
  return (
    <>
      <div className={`form-container ${type}`}>
        <form onSubmit={handleSubmit} method="POST">
          <h1>{type === "sign-up" ? "Create Account" : "Sign In"}</h1>
          {type == "sign-up" && (
            <Dropdown
              options={options}
              handleOptionClick={handleOptionClick}
              selectedOption={selectedOption}
              handleOpenClick={handleOpenClick}
              isOpen={isOpen}
            />
          )}
          {type == "sign-up" && selectedOption?.value == "option1" && (
            <Dropdown
              options={departments}
              handleOptionClick={handleSelectDepartment}
              selectedOption={selectedDepartment}
              handleOpenClick={handleSecondOpen}
              isOpen={isSecondOpen}
              className="animated-outline"
            />
          )}
          {type === "sign-up" && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name || ""}
              onChange={handleChange}
              className={name ? "animated-outline" : ""}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email || ""}
            onChange={handleChange}
            className={email ? "animated-outline" : ""}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {type === "sign-in" && <a href="#">Forget your password?</a>}
          <button type="submit">
            {type === "sign-up" ? "Sign Up" : "Sign In"}
          </button>
          {error && (
            <p style={{ color: "red", fontWeight: 600, textAlign: "center" }}>
              Please check your credentials or try signing in
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default FormContainer;
