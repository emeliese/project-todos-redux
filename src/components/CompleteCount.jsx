import { useSelector } from "react-redux";

export const CompleteCount = () => {
  const tasks = useSelector((state) => state.tasklist.list);
  const completedTasks = tasks.filter((task) => task.complete === true);

  const openTasks = tasks.length - completedTasks.length;

  return (
    <div className="message">
      <div>
        {completedTasks.length < 1 && openTasks !== 0 && "Let's get started!"}
        {completedTasks.length > 0 &&
          openTasks !== 0 &&
          `Keep up the good work!`}
        {openTasks === 0 && tasks.length !== 0 && `Finished 😎`}
        {tasks.length === 0 && `Add a task to keep track`}
      </div>
      <div className="task-count">
        {tasks.length !== 0 &&
          `${completedTasks.length} out of ${tasks.length} done`}
      </div>
    </div>
  );
};
