import React from "react";
import "./radioButton.css";

const RadioButtonGroup = ({ label, options, name, required }) => {
  return (
    <div className="radio-group">
      <label className="radio-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="radio-options">
        {options.map((option, index) => (
          <label key={index} className="radio-option">
            <input type="radio" name={name} value={option} />
            <span className="custom-radio"></span>
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
