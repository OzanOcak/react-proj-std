import { useState } from "react";

function App() {
  const [day, setDay] = useState(true);
  return (
    <div
      className={`${
        day ? `bg-white ` : `bg-black`
      } flex justify-center items-center h-screen`}
    >
      <button
        onClick={() => setDay(true)}
        className={`border px-4 py-2 mr-6 ${day ? "text-black" : "text-white"}`}
      >
        light
      </button>
      <button
        onClick={() => setDay(false)}
        className={`border px-4 py-2 mr-6 ${day ? "text-black" : "text-white"}`}
      >
        dark
      </button>
    </div>
  );
}

export default App;
