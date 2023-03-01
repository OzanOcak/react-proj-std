import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div className="App" style={{ display: "flex", gap: "2em" }}>
      <button onClick={increment}>+</button>
      <p>{state.count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}
