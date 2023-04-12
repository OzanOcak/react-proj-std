function App() {
  return (
    <div className="App">
      <label>Todo App w/ filter</label>
      <form>
        <input type="text" />
        <button>add</button>
      </form>
      <div>
        <ul>
          <li>
            <span>
              <input type="checkbox" />
              list item 1
            </span>
            <button>delete</button>
          </li>
          <li>
            <span>
              <input type="checkbox" />
              list item 2
            </span>
            <button>delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
