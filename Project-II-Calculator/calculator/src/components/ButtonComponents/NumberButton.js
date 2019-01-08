import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div className={props.style.container} onClick={props.onClick}>
      <span className="number-button-text">{props.value}</span>
    </div>
  );
};

export default NumberButton;
