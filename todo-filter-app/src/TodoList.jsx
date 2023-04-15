import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
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
  return (
    <>
      <div className="listing">
        <p onClick={clearFilter}>all</p>
        <p onClick={filterNotCompleted}>not completed</p>
        <p onClick={filterCompleted}>completed</p>
      </div>
      <div>
        <ul>
          {filteredTodoItems?.length === 0 && "--- no todo! ---"}
          {filteredTodoItems?.map((todo) => {
            return (
              <li key={todo.id}>
                <TodoItem todo={todo} setTodos={setTodos} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
