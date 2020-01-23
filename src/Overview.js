import React, { Component } from "react";
import Data from "./Data";
import FirstChart from "./FirstChart";

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      inputData: Data
    };
  }

  render() {
    return (
      <div>
        <h1>Overview landingpage</h1>
        <FirstChart data={this.state.inputData} />
      </div>
    );
  }
}

export default Overview;
