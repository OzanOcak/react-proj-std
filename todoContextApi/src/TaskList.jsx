import { useState, useContext } from "react";
import { TodosContext, TodosDispatchContext } from "./TodosContext.js";

export default function TaskList() {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
}

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TodosDispatchContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            todo: { ...todo, title: e.target.value },
          });
        }}
      />
      {isEditing ? (
        <input
          value={todo.title}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: { ...todo, done: e.target.checked },
            });
          }}
        />
      ) : (
        todo.title
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: todo.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
