import React from "react";

const Dropdown = props => {
  //   console.log("props.data", props.data);
  const nameArray = props.data.map(item => item.studentName);
  //   console.log("nameArray", nameArray);
  const uniqueNameArray = nameArray.filter((name, index, names) => {
    // Truc om dubbele namen er uit te filteren
    return names.indexOf(name) === index;
  });
  //   console.log("uniqueNameArray", uniqueNameArray);

  const dropdownItems = uniqueNameArray.map(item => (
    <option value={item} key={item}>
      {item}
    </option>
  ));

  //   console.log("dropdownItems", dropdownItems);
  return (
    <select name="students" id="student-select" onChange={props.handleChange}>
      <option value="">--Kies een student--</option>
      {dropdownItems}
    </select>
  );
};

export default Dropdown;
