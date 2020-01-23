import React from "react";

const Checkbox = props => {
  return (
    <form>
      <label>
        fun
        <input type={"checkbox"} name="fun" />
      </label>
      <br />
      <label>
        difficulty
        <input type={"checkbox"} name="difficulty" />
      </label>
      <br />
      <label>
        both
        <input type={"checkbox"} name="both" />
      </label>
      <br />
    </form>
  );
};

export default Checkbox;
