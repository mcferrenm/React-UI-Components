import React from "react";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <ActionButton
        value="clear"
        style={{
          container: "clear-button-container",
          text: "clear-button-text"
        }}
      />
      <ActionButton
        value="÷"
        style={{
          container: "action-button-container",
          text: "action-button-text"
        }}
      />
      <NumberButton value="7" />
      <NumberButton value="8" />
      <NumberButton value="9" />
      <ActionButton
        value="✕"
        style={{
          container: "action-button-container",
          text: "action-button-text"
        }}
      />
      <NumberButton value="4" />
      <NumberButton value="5" />
      <NumberButton value="6" />
      <ActionButton
        value="➖"
        style={{
          container: "action-button-container",
          text: "action-button-text"
        }}
      />
      <NumberButton value="1" />
      <NumberButton value="2" />
      <NumberButton value="3" />
      <ActionButton
        value="➕"
        style={{
          container: "action-button-container",
          text: "action-button-text"
        }}
      />
      <NumberButton value="0" />
      <ActionButton
        value="="
        style={{
          container: "action-button-container",
          text: "action-button-text"
        }}
      />
    </div>
  );
};

export default App;
