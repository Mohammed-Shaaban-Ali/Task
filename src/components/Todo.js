import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FaEdit className="edit" onClick={() => editTodo(task.id)} />
        <RiDeleteBin5Fill
          className="delete"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
