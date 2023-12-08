import React from "react";
import { Checkbox } from "./Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { tasklist } from "../reducers/tasklist/tasklistSlice";

export const ListPage = () => {
  const tempToDo = ["task", "the thing", "next thing", "one more thing"];
  const tasks = useSelector((state) => state.tasklist.list);
  const dispatch = useDispatch();
  const addTask = (e) => {
    console.log("in listPage", tasks);
    console.log("in listPage e", addInput.value);
    dispatch(
      tasklist.actions.addTask({
        id: uuidv4(),
        content: addInput.value,
        complete: false,
      })
    );
    addInput.value = "";
    // dispatch
  };
  return (
    <div>
      <h1>ListPage</h1>
      <div>To do:</div>
      <div>
        {tasks.map((task) => (
          <Checkbox key={task.id} task={task} />
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
// {tempToDo.map((task) => (
// label={task.content}
