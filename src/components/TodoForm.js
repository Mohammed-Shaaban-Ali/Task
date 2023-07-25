import React, { useState } from "react";
import { cuntries } from "./data";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
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
        Add cuntry
      </button>
    </form>
  );
};
