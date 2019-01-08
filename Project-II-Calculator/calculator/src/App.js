import React, { Component } from "react";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, log: [] };

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(e) {
    this.setState({
      total: e.target.textContent,
      log: [...this.state.log, e.target.textContent]
    });
  }

  render() {
    return (
      <div className="app">
        <CalculatorDisplay value={this.state.total} log={this.state.log} />
        <ActionButton
          value="clear"
          style={{
            container: "clear-button-container",
            text: "clear-button-text"
          }}
        />
        <ActionButton
          onClick={this.handleDisplay}
          value="÷"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="7"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="8"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="9"
          style={{ container: "non-zero-button-container" }}
        />
        <ActionButton
          onClick={this.handleDisplay}
          value="x"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="4"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="5"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="6"
          style={{ container: "non-zero-button-container" }}
        />
        <ActionButton
          onClick={this.handleDisplay}
          value="–"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="1"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="2"
          style={{ container: "non-zero-button-container" }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="3"
          style={{ container: "non-zero-button-container" }}
        />
        <ActionButton
          onClick={this.handleDisplay}
          value="+"
          style={{
            container: "action-button-container",
            text: "action-button-text"
          }}
        />
        <NumberButton
          onClick={this.handleDisplay}
          value="0"
          style={{ container: "zero-button-container" }}
        />
        <ActionButton
          onClick={this.handleDisplay}
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
