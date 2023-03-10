import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import useLocalStorage from "./hooks/useLocalStorage";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useLocalStorage();
  return (
    <div className="flex gap-2 my-2">
      <Input text={title} setText={(e) => setTitle(e.target.value)} />
      <Button
        handleClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </Button>
    </div>
  );
}
