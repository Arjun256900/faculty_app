import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({
  options,
  handleOptionClick,
  selectedOption,
  handleOpenClick,
  isOpen,
  className
}) => {
  return (
    <div className={`dropdown-container ${className}`}>
      <div className="dropdown-header" onClick={() => handleOpenClick(!isOpen)}>
        {options.length == 3
          ? selectedOption
            ? selectedOption.label
            : "Select Designation"
          : selectedOption
          ? selectedOption.label
          : "Select Department"}
        <i className={`fas fa-angle-down ${isOpen ? "open" : ""}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
