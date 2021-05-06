import React, { useState } from "react";
import "./css/taskItem.css";

export default function TaskItem({
  todo,
  tasks,
  setTasks,
  setImpCount,
  setFinishedCount,
  setReminderCount,
}) {
  var count;
  const deleteTaskHandler = () => {
    tasks.map((task) => {
      if (task.id === todo.id) {
        task.isFinished = false;
        task.isImportant = false;
        task.isReminder = false;
        setImpCount(taskCounter(0));
        setFinishedCount(taskCounter(1));
        setReminderCount(taskCounter(2));
      }
      return false;
    });
    setTasks(tasks.filter((task) => task.id !== todo.id));
  };

  const importantTaskHandler = () => {
    tasks.map((task) => {
      if (task.id === todo.id) {
        return (task.isImportant = !task.isImportant);
      }
      return false;
    });
    setImpCount(taskCounter(0));
    setTasks(tasks);
    // setImportant(!isImportant);
  };
  function completeTaskHandler() {
    tasks.map((task) => {
      if (task.id === todo.id) {
        return (task.isFinished = !task.isFinished);
      }
      return false;
    });
    setFinishedCount(taskCounter(1));
    taskCounter(1);
    setTasks(tasks);
    // setisFinished(!isFinished);
  }
  function reminderTaskHandler() {
    tasks.map((task) => {
      if (task.id === todo.id) {
        return (task.isReminder = !task.isReminder);
      }
      return false;
    });
    setReminderCount(taskCounter(2));
    setTasks(tasks);
    // setIsReminder(!isReminder);
  }
  function taskCounter(taskChecker) {
    switch (taskChecker) {
      case 0:
        count = tasks.filter((task) => task.isImportant).length;
        break;
      case 1:
        count = tasks.filter((task) => task.isFinished).length;
        break;
      case 2:
        count = tasks.filter((task) => task.isReminder).length;
        break;
      default:
        break;
    }
    return count;
  }

  return (
    <div className="task-item-container">
      <div className="task-item">
        <h1>{todo.task}</h1>
        <div className="task-buttons">
          <span>
            {todo.isFinished ? (
              <i
                className="fa fa-check"
                style={{ background: "#000" }}
                onClick={completeTaskHandler}
              ></i>
            ) : (
              <i className="fa fa-check" onClick={completeTaskHandler}></i>
            )}
          </span>
          <span>
            <i className="fa fa-trash" onClick={deleteTaskHandler}></i>
          </span>
          <span>
            {todo.isReminder ? (
              <i
                className="fa fa-bell"
                style={{ background: "#000" }}
                onClick={reminderTaskHandler}
              ></i>
            ) : (
              <i className="fa fa-bell" onClick={reminderTaskHandler}></i>
            )}
          </span>
          <span>
            {todo.isImportant ? (
              <i
                className="fa fa-star"
                style={{ background: "#000" }}
                onClick={importantTaskHandler}
              ></i>
            ) : (
              <i className="fa fa-star" onClick={importantTaskHandler}></i>
            )}
          </span>
        </div>
        {/* <p className="isFinished">Task is Marked Finished</p> */}
      </div>
    </div>
  );
}
