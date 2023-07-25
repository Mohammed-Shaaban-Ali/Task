import React, { useState } from "react";
import { cuntries } from "./data";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-dropdown"
      >
        <option value="" disabled>
          Cuntry Name
        </option>
        {cuntries.map((cuntry) => (
          <option key={cuntry.id} value={cuntry.name}>
            {cuntry.name}
          </option>
        ))}
      </select>
      <button type="submit" className="todo-btn">
        save change
      </button>
    </form>
  );
};
