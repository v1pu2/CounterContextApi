import React, { Component } from "react";
import Context from "./Context";
export default class GlobalState extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    return (
      <Context.Provider
        value={{
          counter: this.state.counter,
          incrementCounter: this.incrementCounter,
          decrementCounter: this.decrementCounter,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
