import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
});

export const TodoProvider = (props) => {
  const localStorageTodos = JSON.parse(localStorage.getItem("ITEMS")) || [];
  const [todos, setTodos] = useState(localStorageTodos);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};
