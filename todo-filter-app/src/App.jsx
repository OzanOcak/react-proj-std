import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
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
    <div className="App">
      <NewTodoForm setTodos={setTodos} />
      <div className="listing">
        <p onClick={clearFilter}>all</p>
        <p onClick={filterNotCompleted}>not completed</p>
        <p onClick={filterCompleted}>completed</p>
      </div>
      <div>
        <ul>
          {filteredTodoItems?.length === 0 && "--- no todo! ---"}
          {filteredTodoItems?.map((todo) => {
            return <TodoList todo={todo} setTodos={setTodos} key={todo.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
