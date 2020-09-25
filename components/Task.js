import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = (props) => {
  const { RemoveTask, FindItem } = useContext(TaskListContext);

  return (
    <div>
      <li className="list-item">
        <span>{props.task.name}</span>
        <div>
          <button
            onClick={() => RemoveTask(props.task.id)}
            className="btn-delete task-btn"
          >
            <i className="fas fa-trash-alt">delete</i>
          </button>
          <button
            onClick={() => FindItem(props.task.id)}
            className="btn-edit task-btn"
          >
            <i className="fas fa-pen">edit</i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
