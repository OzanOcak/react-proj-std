import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Crud from "./crud";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Crud />}></Route>
      </Routes>
    </div>
  );
}

export default App;
