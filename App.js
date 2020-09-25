import React from "react";
import "./App.css";
import TaskList from "./components/TasksList";
import TaskListContextProvider from "./context/TaskListContext";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <AddTask />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
