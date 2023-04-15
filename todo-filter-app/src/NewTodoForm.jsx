import React, { useState } from "react";

function NewTodoForm({ setTodos }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
    setText("");
  };
  return (
    <div>
      <label>Todo App w/ filter</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
