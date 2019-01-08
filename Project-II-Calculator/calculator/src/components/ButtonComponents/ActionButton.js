import React from "react";
import "./Button.css";
const ActionButton = props => {
  return (
    <div className={props.style.container} onClick={props.onClick}>
      <span className={props.style.text}>{props.value}</span>
    </div>
  );
};

export default ActionButton;
