import React, { Component } from "react";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 3 };
  }

  render() {
    return (
      <div className="app">
        <CalculatorDisplay value={this.state.total} />
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
        <NumberButton
          value="7"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          value="8"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          value="9"
          style={{ container: "non-zero-button-container" }}
        />
        <ActionButton
          value="x"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          value="4"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          value="5"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          value="6"
          style={{ container: "non-zero-button-container" }}
        />
        <ActionButton
          value="–"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          value="1"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          value="2"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          value="3"
          style={{ container: "non-zero-button-container" }}
        />
        <ActionButton
          value="+"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          value="0"
          style={{ container: "zero-button-container" }}
        />
        <ActionButton
          value="="
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
      </div>
    );
  }
}

export default App;
