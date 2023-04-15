import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todo, setTodos }) {
  return (
    <div>
      <li key={todo.id}>
        <TodoItem todo={todo} setTodos={setTodos} />
      </li>
    </div>
  );
}

export default TodoList;
