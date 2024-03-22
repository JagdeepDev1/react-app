import React from "react";

function Task(props) {
  return (
    <>
      <div className="flex flex-nowrap mt-2">
        <ul class="max-w-md space-y-1 list-disc font-bold list-inside dark:text-gray-400">
          <li>{props.taskName}</li>
        </ul>

        <button
          className="ml-2 text-red-700"
          onClick={() => props.removeTask(props.id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default Task;
