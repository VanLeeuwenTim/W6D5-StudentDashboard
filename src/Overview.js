import React, { Component } from "react";
import Data from "./Data";
import HomeCharts from "./HomeCharts";
import Checkbox from "./Checkbox";

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      inputData: Data,
      checkboxValue: {
        fun: true,
        difficulty: true
      }
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(event) {
    const inputName = event.target.name;
    const inputValue = event.target.checked;

    this.setState(state => {
      const checkboxValue = state.checkboxValue;
      console.log(inputValue);
      checkboxValue[inputName] = inputValue;
      return {
        checkboxValue: checkboxValue
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Overview landingpage</h1>
        <HomeCharts
          data={this.state.inputData}
          checkboxValue={this.state.checkboxValue}
        />
        <Checkbox
          handleChecked={this.handleChecked}
          checkboxValue={this.state.checkboxValue}
        />
      </div>
    );
  }
}

export default Overview;
