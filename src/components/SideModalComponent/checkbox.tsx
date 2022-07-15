import React from "react";

const Checkbox = ({ type = "checkbox" }) => {
  return (
    <label>
      <input type={type} className="custom-checkbox" />
    </label>
  );
};

export default Checkbox;
