import { useState } from "react";
export default function TaskList({ todos, onDelete, onChange }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Task todo={todo} onDelete={onDelete} onChange={onChange} />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ todo, onDelete, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {isEditing ? (
        <input
          value={todo.title}
          onChange={(e) => onChange({ ...todo, title: e.target.value })}
        />
      ) : (
        todo.title
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
