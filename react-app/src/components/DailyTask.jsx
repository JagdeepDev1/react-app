import React from "react";
import { useState } from "react";
import Task from "./Task";

function DailyTask() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : "");
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <>
      <form onSubmit={addTask} className="space-x-3 mt-12">
        <div className="p-6 h-screen w-screen justify-center items-center">
          <h1 className="flex w-full text-3xl mb-2 underline">
            Daily Checklist
          </h1>

          {/* This is Input field and a button for adding list of daily activities */}
          <div className="flex">
            <input
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
            <button
              type="submit"
              className=" ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
      </form>
    </>
  );
}

export default DailyTask;
