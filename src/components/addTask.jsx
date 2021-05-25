import React, { useState } from "react";
import "./css/addTask.css";
import uniqid from "uniqid";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(24, 206, 18, 0.63)",
  },
});

export default function AddTask({ tasks, setTasks }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const setTasksHandler = (e) => {
    var inputData = document.querySelector("#taskInput").value;

    if (inputData.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: uniqid(),
          task: inputData,
          isImportant: false,
          isFinished: false,
          isReminder: false,
          reminder: "",
        },
      ]);
      handleClick();
    }
  };
  return (
    <div className="input-container">
      <div className="task-input">
        <input id="taskInput" type="text" placeholder="Enter the task" />
        <button onClick={setTasksHandler}>
          <i className="fa fa-plus"></i>
        </button>

        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            classes={{
              root: classes.root,
            }}
            severity="success"
          >
            Task Added Succesfully
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
