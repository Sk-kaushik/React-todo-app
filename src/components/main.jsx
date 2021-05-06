import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import AddTask from "./addTask";
import FinishedTask from "./finishedtask";
import Important from "./important";
import UnfinishedTask from "./unfinishedtask";
import AllTasks from "./allTasks";

export default function Main() {
  // const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [impCount, setImpCount] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const [reminderCount, setReminderCount] = useState(0);

  return (
    <>
      <Router>
        <div className="mainContainer">
          <div className="sideNav">
            <ul>
              <NavLink className="link" to="/" exact>
                <li>
                  <div>
                    <i className="fa fa-plus"></i>
                    <p>Add Task</p>
                  </div>
                </li>
              </NavLink>

              <NavLink className="link" to="/allTasks">
                <li>
                  <div>
                    <i className="fa fa-list"></i>
                    <p>All Tasks</p>
                  </div>
                  <p className="badge">{tasks.length}</p>
                </li>
              </NavLink>

              <NavLink className="link" to="/important">
                <li>
                  <div>
                    <i className="fa fa-star"></i> <p>Important</p>
                  </div>
                  <p className="badge">{tasks.length > 0 ? impCount : 0}</p>
                </li>
              </NavLink>
              <NavLink className="link" to="/finished">
                <li>
                  <div>
                    <i className="fa fa-check"></i>
                    <p>Finished Task</p>
                  </div>
                  <p className="badge">
                    {tasks.length > 0 ? finishedCount : 0}
                  </p>
                </li>
              </NavLink>
              <NavLink className="link" to="/unfinished">
                <li>
                  <div>
                    <i className="fa fa-times"></i>
                    <p>Unfinished Task</p>
                  </div>
                  <p className="badge">
                    {tasks.length > 0 ? tasks.length - finishedCount : 0}
                  </p>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="workspace">
            <Switch>
              <Route path="/" exact>
                <AddTask setTasks={setTasks} tasks={tasks} />
              </Route>
              <Route path="/allTasks">
                <AllTasks
                  tasks={tasks}
                  setTasks={setTasks}
                  setImpCount={setImpCount}
                  setFinishedCount={setFinishedCount}
                  setReminderCount={setReminderCount}
                />
              </Route>
              <Route path="/important">
                <Important
                  tasks={tasks}
                  setTasks={setTasks}
                  setImpCount={setImpCount}
                  setFinishedCount={setFinishedCount}
                  setReminderCount={setReminderCount}
                />
              </Route>
              <Route path="/finished">
                <FinishedTask
                  tasks={tasks}
                  setTasks={setTasks}
                  setImpCount={setImpCount}
                  setFinishedCount={setFinishedCount}
                  setReminderCount={setReminderCount}
                />
              </Route>
              <Route path="/unfinished">
                <UnfinishedTask
                  tasks={tasks}
                  setTasks={setTasks}
                  setImpCount={setImpCount}
                  setFinishedCount={setFinishedCount}
                  setReminderCount={setReminderCount}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}
