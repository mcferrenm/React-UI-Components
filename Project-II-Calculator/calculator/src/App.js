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
          container: "divide-button-container",
          text: "divide-button-text"
        }}
      />
      <NumberButton />
    </div>
  );
};

export default App;
