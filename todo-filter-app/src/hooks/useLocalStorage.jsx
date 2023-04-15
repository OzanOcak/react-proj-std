import React, { useEffect, useState } from "react";

function useLocalStorage() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);
  return { todos, setTodos };
}

export default useLocalStorage;
