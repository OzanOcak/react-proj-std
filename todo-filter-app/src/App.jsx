import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";

function App() {
  const [text, setText] = useState("");
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

  const handleDelete = (todoId) => {
    const updatedTodos = (currTodos) => {
      return currTodos.filter((todo) => todo.id !== todoId);
    };
    setTodos(updatedTodos);
  };
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }
  return (
    <div className="App">
      <NewTodoForm text={text} setText={setText} setTodos={setTodos} />
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
                <span>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.text}
                </span>
                <button onClick={() => handleDelete(todo.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
