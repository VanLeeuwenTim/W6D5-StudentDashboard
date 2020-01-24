import React, { Component } from "react";
import Data from "./Data";
import HomeCharts from "./HomeCharts";
import Checkbox from "./Checkbox";

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      inputData: Data
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(event) {
    console.log("test", event.target.checked);
  }

  render() {
    return (
      <div>
        <h1>Overview landingpage</h1>
        <HomeCharts data={this.state.inputData} />
        <Checkbox handleChecked={this.handleChecked} />
      </div>
    );
  }
}

export default Overview;
