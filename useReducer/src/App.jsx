import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "icrement",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div className="App" style={{ display: "flex", gap: "2em" }}>
      <button onClick={increment}>+</button>
      <p>{state.count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}
