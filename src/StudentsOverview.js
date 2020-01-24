import React, { Component } from "react";
import Data from "./Data";
import StudentCharts from "./StudentCharts";
import Dropdown from "./Dropdown";

class StudentsOverview extends Component {
  constructor() {
    super();
    this.state = { inputData: Data };
  }
  render() {
    return (
      <div>
        <h1>StudentsOverview</h1>
        <Dropdown />
        <StudentCharts data={this.state.inputData} />
      </div>
    );
  }
}

export default StudentsOverview;
