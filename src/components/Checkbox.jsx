import React from "react";
import { useDispatch } from "react-redux";

export const Checkbox = ({ task }) => {
  //   const dispatch = useDispatch();
  const addTask = () => {
    console.log("check in checkbox");
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={task.id}
          name={task.label}
          defaultChecked={task.complete}
          onClick={() => addTask()}
        ></input>
        {task.content} id:{task.id}
      </label>
    </div>
  );
};

//   <li>{label}</li>;
