import React from "react";

function TodoList({ todo, setTodos }) {
  const handleDelete = (todoId) => {
    const updatedTodos = (currTodos) => {
      return currTodos.filter((todo) => todo.id !== todoId);
    };
    setTodos(updatedTodos);
  };
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }
  return (
    <div>
      <li key={todo.id}>
        <span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          {todo.text}
        </span>
        <button onClick={() => handleDelete(todo.id)}>delete</button>
      </li>
    </div>
  );
}

export default TodoList;
