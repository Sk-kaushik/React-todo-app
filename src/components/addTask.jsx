import React from "react";
import "./css/addTask.css";
import uniqid from "uniqid";

export default function AddTask({ tasks, setTasks }) {
  const setTasksHandler = (e) => {
    var inputData = document.querySelector("#taskInput").value;
    setTasks([
      ...tasks,
      {
        id: uniqid(),
        task: inputData,
        isImportant: false,
        isFinished: false,
        isReminder: false,
        reminderCount: 0,
        finishedCount: 0,
        importantCount: 0,
        unfinishedCount: 0,
      },
    ]);
    document.querySelector(".task-successfull").style.bottom = "-40px";
    setTimeout(() => {
      document.querySelector(".task-successfull").style.bottom = "0";
      document.querySelector("#taskInput").value = "";
    }, 800);
  };
  return (
    <div className="input-container">
      <div className="task-input">
        <input id="taskInput" type="text" placeholder="Enter the task" />
        <button onClick={setTasksHandler}>
          <i className="fa fa-plus"></i>
        </button>
        <p
          // style={{
          //   display: "none",
          // }}
          className="task-successfull"
        >
          Task Added Successfully
        </p>
      </div>
    </div>
  );
}
