import React, { Component } from "react";
import Data from "./Data";
import StudentCharts from "./StudentCharts";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

class StudentsOverview extends Component {
  constructor() {
    super();
    this.state = {
      inputData: Data,
      value: "",
      checkboxValue: {
        fun: true,
        difficulty: true
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(event) {
    const inputName = event.target.name;
    const inputValue = event.target.checked;

    this.setState(prevState => {
      const checkboxValue = prevState.checkboxValue;
      checkboxValue[inputName] = inputValue;
      return {
        checkboxValue: checkboxValue
      };
    });
  }
  handleChange(event) {
    const inputName = event.target.value;

    this.setState(prevState => {
      const value = prevState.value;
      console.log("value", value);

      return {
        value: inputName
      };
    });
  }
  render() {
    return (
      <div>
        <h1>StudentsOverview</h1>
        <Dropdown
          handleChange={this.handleChange}
          data={this.state.inputData}
        />
        <Checkbox
          handleChecked={this.handleChecked}
          checkboxValue={this.state.checkboxValue}
        />
        <StudentCharts
          data={this.state.inputData}
          value={this.state.value}
          checkboxValue={this.state.checkboxValue}
        />
      </div>
    );
  }
}

export default StudentsOverview;
