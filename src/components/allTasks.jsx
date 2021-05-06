import React from "react";
// import Clock from "./clock";
import TaskItem from "./taskItem";

export default function AllTasks({
  tasks,
  setTasks,
  setImpCount,
  setFinishedCount,
  setReminderCount,
}) {
  return (
    <div className="all-tasks">
      <div className="task-list">
        {tasks.map((todo) => {
          return (
            <TaskItem
              key={todo.id}
              todo={todo}
              tasks={tasks}
              setTasks={setTasks}
              setImpCount={setImpCount}
              setFinishedCount={setFinishedCount}
              setReminderCount={setReminderCount}
            />
          );
        })}
      </div>
      <div className="clock-container">{/* <Clock /> */}</div>
    </div>
  );
}
