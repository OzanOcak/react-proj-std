import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { todos, setTodos } = useLocalStorage();

  return (
    <div className="App">
      <NewTodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
