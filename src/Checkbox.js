import React from "react";

const Checkbox = props => {
  console.log(props);
  return (
    <form>
      <label>
        fun
        <input type={"checkbox"} name="fun" onChange={props.handleChecked} />
      </label>
      <br />
      <label>
        difficulty
        <input
          type={"checkbox"}
          name="difficulty"
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        both
        <input
          type={"checkbox"}
          name="both"
          onChange={props.handleInputChange}
        />
      </label>
      <br />
    </form>
  );
};

export default Checkbox;
