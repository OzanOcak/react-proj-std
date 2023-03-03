import { useReducer } from "react";
import AddTodo from "./AddTodo";
import todosReducer from "./reducer";
import TodoList from "./TodoList";

const list = [
  { id: 0, title: "tomato", done: true },
  { id: 1, title: "apple", done: false },
  { id: 2, title: "grape", done: false },
];
let nextId = 3;

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, list);

  let doneTodos = todos.filter((todo) => todo.done === true).length;

  function handleAddTodo(title) {
    dispatch({ type: "added", id: nextId++, title: title });
  }
  function handleDeleteTodo(todoId) {
    dispatch({ type: "deleted", id: todoId });
  }
  function handleChangeTodo(updatedTodo) {
    dispatch({ type: "changed", todo: updatedTodo });
  }

  return (
    <div className=" flex flex-col items-center">
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onChange={handleChangeTodo}
      />
      <hr className="text-blue-700" />
      <p className="text-red-400">
        {doneTodos} of {todos.length}
      </p>
    </div>
  );
}
