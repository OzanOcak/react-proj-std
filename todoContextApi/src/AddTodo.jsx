import { useState, useContext } from "react";
import { TodosDispatchContext } from "./TodosContext.js";

let nextId = 3;

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useContext(TodosDispatchContext);

  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          dispatch({
            type: "added",
            id: nextId++,
            title: title,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
