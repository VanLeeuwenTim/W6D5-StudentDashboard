import React, { Component } from "react";
import Data from "./Data";
import StudentCharts from "./StudentCharts";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

class StudentsOverview extends Component {
  constructor() {
    super();
    this.state = { inputData: Data, value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState(prevState => {
    //   const checkboxValue = prevState.checkboxValue;
    //   console.log(inputValue);
    //   checkboxValue[inputName] = inputValue;
    //   return {
    //     checkboxValue: checkboxValue
    //   };
    // });
    const inputName = event.target.value;
    console.log("event.target.value", event.target.value);
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
        <Dropdown handleChange={this.handleChange} />
        <StudentCharts data={this.state.inputData} value={this.state.value} />
      </div>
    );
  }
}

export default StudentsOverview;
