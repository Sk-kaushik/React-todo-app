import React, { useState } from "react";
import "./css/taskItem.css";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import $ from "jquery";
import Modal from "@material-ui/core/Modal";

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
  }

  const reminderTaskHandler = () => {
    tasks.map((task) => {
      if (task.id === todo.id) {
        if (!task.isReminder) {
          console.log("No reminder");
        }

        return (task.isReminder = !task.isReminder);
      }
      return false;
    });
    setReminderCount(taskCounter(2));
    setTasks(tasks);
  };

  const taskCounter = (taskChecker) => {
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
  };

  return (
    <>
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
            {
              //-------------For Reminder Icon------------------
              /* <span>
              {todo.isReminder ? (
                <i
                  className="fa fa-bell"
                  style={{ background: "#000" }}
                  onClick={reminderTaskHandler}
                ></i>
              ) : (
                <i className="fa fa-bell" onClick={reminderTaskHandler}></i>
              )}
            </span> */
            }
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

      {/* <div className="modal-overlay">
        <div className="reminder-container">
          <div className="reminder-heading">
            <h1> Enter Reminder Time</h1>
            <span>Reminder should be less than 24 hours</span>
          </div>

          <div className="reminder-input">
            <input type="text" name="" id="" placeholder="22" />
            <span> : </span>
            <input type="text" name="" id="" placeholder="10" />
          </div>

          <div className="reminder-btn">
            <button className="set-reminder">Set reminder</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div> */}
    </>
  );
}
