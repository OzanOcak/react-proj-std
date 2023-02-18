import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import { TodosContext, TodosDispatchContext } from "./TodosContext.js";

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
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
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
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          title: action.title,
          done: false,
        },
      ];
    }
    case "changed": {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
