import { useReducer } from "react";

function reducer(state, action) {
  return { count: state.count + 1 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App" style={{ display: "flex" }}>
      <button onClick={() => dispatch()}>+</button>
      <p>{state.count}</p>
    </div>
  );
}
