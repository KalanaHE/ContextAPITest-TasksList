import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const AddTask = () => {
  const { AddNewTask, ClearList, EditTask, editItem } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem !== null) {
      AddNewTask(title);
      setTitle("");
    } else {
      EditTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem != null) {
      setTitle(editItem.name);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          type="text"
          value={title}
          className="task-input"
          placeholder="Add Task"
          required
        />
        <div className="buttons">
          <button className="btn add-task-btn">Add Task</button>
          <button onClick={ClearList} className="btn clear-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
