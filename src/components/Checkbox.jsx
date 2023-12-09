import React from "react";
import { useDispatch } from "react-redux";
import { tasklist } from "../reducers/tasklist/tasklistSlice";

export const Checkbox = ({ task }) => {
  const dispatch = useDispatch();

  const check = () => {
    dispatch(tasklist.actions.toggleCheck({ id: task.id }));
  };

  const removeTask = () => {
    dispatch(tasklist.actions.removeTask({ id: task.id }));
  };
  return (
    <div>
      <label>
        <div>
          <input
            type="checkbox"
            id={task.id}
            name={task.label}
            defaultChecked={task.complete}
            onClick={() => check()}
          ></input>
          {task.content}
          <button className="remove-task" onClick={() => removeTask()}>
            ❌
          </button>
        </div>
      </label>
    </div>
  );
};
