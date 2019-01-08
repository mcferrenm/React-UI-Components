import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div className="number-button-container">
      <span className="number-button-text">{props.value}</span>
    </div>
  );
};

export default NumberButton;
