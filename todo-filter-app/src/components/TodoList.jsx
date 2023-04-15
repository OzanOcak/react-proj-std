import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import useFilter from "../hooks/useFilter";
import { TodoContext } from "../store/TodoContext";

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);
  const {
    filteredTodoItems,
    filterCompleted,
    filterNotCompleted,
    clearFilter,
  } = useFilter(todos);

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
