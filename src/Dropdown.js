import React from "react";

const Dropdown = props => {
  return (
    <select name="students" id="student-select">
      <option value="">--Kies een student--</option>
      <option value="evelyn">Evelyn</option>
      <option value="aranka">Aranka</option>
      <option value="floris">Floris</option>
    </select>
  );
};

export default Dropdown;
