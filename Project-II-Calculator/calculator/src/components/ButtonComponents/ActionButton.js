import React from "react";
import "./Button.css";
const ActionButton = props => {
  return (
    <div className={props.style.container}>
      <span className={props.style.text}>{props.name}</span>
    </div>
  );
};

export default ActionButton;
