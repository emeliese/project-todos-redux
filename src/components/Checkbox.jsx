import React from "react";

export const Checkbox = ({ label }) => {
  const check = () => {
    console.log("check");
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={label}
          name={label}
          onClick={() => check()}
        ></input>
        {label}
      </label>
    </div>
  );
};

//   <li>{label}</li>;
