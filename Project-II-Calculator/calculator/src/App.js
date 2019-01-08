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
        name="clear"
        style={{
          container: "action-button-container",
          text: "action-button-text"
        }}
      />
      <NumberButton />
    </div>
  );
};

export default App;
