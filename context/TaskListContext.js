import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, settasks] = useState([
    { name: "read books", id: 1 },
    { name: "wash the bike", id: 2 },
    { name: "write code", id: 3 },
  ]);

  const [editItem, SetEditItem] = useState(null);

  const AddNewTask = (name) => {
    settasks([...tasks, { name: name, id: uuidv4() }]);
  };

  const RemoveTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };

  const ClearList = () => {
    settasks([]);
  };

  const FindItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    SetEditItem(item);
  };

  const EditTask = (title, id) => {
    const NewTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    settasks(NewTasks);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        AddNewTask,
        RemoveTask,
        ClearList,
        FindItem,
        EditTask,
        editItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
