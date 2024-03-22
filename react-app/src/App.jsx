import { useState } from "react";
import "./App.css";
import Task from "./component/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="p-6 h-screen w-screen w-full justify-center items-center">
        <h1 className="flex w-full text-3xl mb-2 underline">Daily Checklist</h1>

        {/* This is Input field and a button for adding list of daily activities */}
        <div className="flex">
          <input
            className="block h-9 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleChange}
          />
          <button
            type="button"
            className=" ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        {/* This is List of Daily activties that we can complete or removes based on buttons that are in Task Component */}
        <div className="ml-8 justify-center items-center">
          {todoList.map((value) => {
            return (
              <Task
                taskName={value.taskName}
                id={value.id}
                removeTask={removeTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
