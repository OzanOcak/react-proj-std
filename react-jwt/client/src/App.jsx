import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
                <Home logoutUser={logoutUser} />
              </>
            }
          />

          <Route
            path="/login"
            element={<Login setLogoutUser={setLogoutUser} />}
          />

          <Route
            path="/register"
            element={<Register setLogoutUser={setLogoutUser} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
