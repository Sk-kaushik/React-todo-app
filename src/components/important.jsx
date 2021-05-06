import React from "react";
import TaskItem from "./taskItem";

export default function important({ tasks, setTasks }) {
  return (
    <div className="all-tasks">
      <div className="task-list">
        {tasks.map((todo) => {
          if (todo.isImportant) {
            return (
              <TaskItem
                key={todo.id}
                todo={todo}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          }
          return false;
        })}
      </div>
      <div className="clock-container">{/* <Clock /> */}</div>
    </div>
  );
}
