import React from "react";
import { Checkbox } from "./Checkbox";

export const ListPage = () => {
  const tempToDo = ["task", "the thing", "next thing", "one more thing"];
  const addTask = () => {
    addInput.value = "";
  };
  return (
    <div>
      <h1>ListPage</h1>
      <div>To do:</div>
      <div>
        {tempToDo.map((task) => (
          <Checkbox key={task} label={task} />
        ))}
      </div>
      <div>
        <input type="text" placeholder="Add new task" id="addInput"></input>
        <button onClick={() => addTask()}>Add</button>
      </div>
    </div>
  );
};
// <li key={task}>{task}</li>
