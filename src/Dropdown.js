import React from "react";

const Dropdown = props => {
  console.log("props", props);
  return (
    <select name="students" id="student-select" onChange={props.handleChange}>
      <option value="">--Kies een student--</option>
      <option value="Evelyn">Evelyn</option>
      <option value="Aranka">Aranka</option>
      <option value="Floris">Floris</option>
    </select>
  );
};

export default Dropdown;
