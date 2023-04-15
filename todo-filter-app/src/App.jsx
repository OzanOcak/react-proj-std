import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <NewTodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
