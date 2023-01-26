import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="App">
      <label htmlFor="focus-input">Focus me on page load</label>
      <input type="text" name="focus-input" ref={inputRef} />
    </div>
  );
}

export default App;
