import React from "react";
import { Checkbox } from "./Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { tasklist } from "../reducers/tasklist/tasklistSlice";
import { CompleteCount } from "./CompleteCount";

export const ListPage = () => {
  const tasks = useSelector((state) => state.tasklist.list);

  const dispatch = useDispatch();
  const addTask = () => {
    if (addInput.value) {
      dispatch(
        tasklist.actions.addTask({
          id: uuidv4(),
          content: addInput.value,
          complete: false,
        })
      );
    }
    addInput.value = "";
  };
  return (
    <div className="list-page-container">
      <h1>My tasks</h1>
      <div>
        <CompleteCount />

        <div>
          <input
            className="add-input"
            type="text"
            placeholder="Add new task"
            id="addInput"
          ></input>
          <button onClick={() => addTask()}>Add</button>
        </div>

        <div>
          {tasks.map((task) => (
            <Checkbox key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};
