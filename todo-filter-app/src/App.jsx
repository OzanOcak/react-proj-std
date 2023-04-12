import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
    setText("");
  };
  const handleDelete = (todoId) => {
    const updatedTodos = (currTodos) => {
      return currTodos.filter((todo) => todo.id !== todoId);
    };
    setTodos(updatedTodos);
  };
  function handleCheck(id, completed) {
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
      <label>Todo App w/ filter</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>add</button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={(e) => handleCheck(todo.id, e.target.checked)}
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
