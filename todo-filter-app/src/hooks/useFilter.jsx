import React, { useEffect, useState } from "react";

function useFilter(todos) {
  const [filteredTodoItems, setFilteredTodoItems] = useState(todos);

  useEffect(() => {
    setFilteredTodoItems(todos);
  }, [todos]);

  function filterCompleted() {
    const filteredItems = todos.filter((todo) => todo.completed === true);
    setFilteredTodoItems(filteredItems);
  }
  function filterNotCompleted() {
    const filteredItems = todos.filter((todo) => todo.completed !== true);
    setFilteredTodoItems(filteredItems);
  }
  function clearFilter() {
    setFilteredTodoItems(todos);
  }
  return {
    filteredTodoItems,
    filterCompleted,
    filterNotCompleted,
    clearFilter,
  };
}

export default useFilter;
