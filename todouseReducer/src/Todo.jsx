import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

export default function Task({ todo, onDelete, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <label className="flex gap-1 ">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {isEditing ? (
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          value={todo.title}
          onChange={(e) => onChange({ ...todo, title: e.target.value })}
        />
      ) : (
        <p className="mr-[14rem] w-5">{todo.title}</p>
      )}

      <Button handleClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button handleClick={() => onDelete(todo.id)}>Delete</Button>
    </label>
  );
}
