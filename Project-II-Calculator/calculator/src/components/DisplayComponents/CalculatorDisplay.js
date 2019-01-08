import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="display">
      <span className="display-text">{props.value}</span>
    </div>
  );
};

export default CalculatorDisplay;
