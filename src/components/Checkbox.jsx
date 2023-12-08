import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tasklist } from "../reducers/tasklist/tasklistSlice";


export const Checkbox = ({ task }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(task.complete);

  const check = () => {
    console.log("task.complete", task.complete, "task.id", task.id);
    // setChecked(!checked)
    dispatch(tasklist.actions.toggleCheck({id: task.id}));
    // console.log("checkbox", task.complete);
    console.log("task.complete", task.complete);
    // console.log("task.id", task.id, "checked", checked);

  };

  const removeTask = () => {
    dispatch(tasklist.actions.removeTask({id: task.id}))
    console.log("Hello")
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={task.id}
          name={task.label}
          defaultChecked={task.complete}
          onClick={() => check()}
        ></input>
        {task.content} id:{task.id}
      </label><button onClick={() => removeTask()}>Remove task</button>
    </div>
  );
};

//   <li>{label}</li>;
