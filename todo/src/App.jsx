import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const list = [
  { id: 0, title: "tomato", done: true },
  { id: 1, title: "apple", done: false },
  { id: 2, title: "grape", done: false },
];
let nextId = 3;

export default function App() {
  const [todos, setTodos] = useState(list);

  let doneTodos = todos.filter((todo) => todo.done === true).length;

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }
  function handleChangeTodo(updatedTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onDelete={handleDeleteTodo}
        onChange={handleChangeTodo}
      />
      <hr />
      <p>
        {doneTodos} of {todos.length}
      </p>
    </>
  );
}
