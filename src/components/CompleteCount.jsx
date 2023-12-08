import { useEffect } from "react";
import { useSelector } from "react-redux";


export const CompleteCount = () => {

    const tasks = useSelector((state) => state.tasklist.list);
    const completedTasks = tasks.filter((task) => task.complete === true);

    const openTasks = tasks.length - completedTasks.length;


    return (
        <div>
            <div>
                {(completedTasks.length < 1) && "No tasks completed so far, but I believe in you!"}
                {(completedTasks.length > 1 && openTasks.length !== 0) && `Good job! You've completed ${completedTasks.length} tasks!`}
                {(completedTasks.length === 1 && openTasks.length !== 0)&& `You've completed ${completedTasks.length} task, keep it up!`}
                {openTasks.length === 0 && `You're done`}
            </div>
            <div>open: {openTasks}</div>
            <div>completed: {completedTasks.length}</div>
            <div>all: {tasks.length}</div>
        </div>

    );
}
// I am completecount {completedTasks.length}