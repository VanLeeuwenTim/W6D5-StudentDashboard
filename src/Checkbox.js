import React from "react";

const Checkbox = props => {
  return (
    <form>
      <label>
        fun
        <input
          type={"checkbox"}
          name="fun"
          onChange={props.handleChecked}
          checked={props.checkboxValue.fun}
        />
      </label>
      <br />
      <label>
        difficulty
        <input
          type={"checkbox"}
          name="difficulty"
          onChange={props.handleChecked}
          checked={props.checkboxValue.difficulty}
        />
      </label>
    </form>
  );
};

export default Checkbox;
