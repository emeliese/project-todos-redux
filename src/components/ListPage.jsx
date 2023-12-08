import React, {useState} from "react";
import { Checkbox } from "./Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { tasklist } from "../reducers/tasklist/tasklistSlice";
import { CompleteCount } from "./CompleteCount";
import "./ListPage.css";

export const ListPage = () => {
  const tempToDo = ["task", "the thing", "next thing", "one more thing"];
  const tasks = useSelector((state) => state.tasklist.list);
  let completedTasks = tasks.filter((task) => task.complete === true);

const [completed, setCompleted] = useState(completedTasks.length);

  const dispatch = useDispatch();
  const addTask = (e) => {
    console.log("in listPage", tasks);
    console.log("in listPage e", addInput.value);
    if (addInput.value){
    dispatch(
      tasklist.actions.addTask({
        id: uuidv4(),
        content: addInput.value,
        complete: false,
      })
    )};
    addInput.value = "";
    // dispatch
  };
  return (
    <div className="list-page-container">
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
      <div>
        <CompleteCount/>

      </div>
    </div>

  );
};
// <li key={task}>{task}</li>
// {tempToDo.map((task) => (
// label={task.content}
