import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };
  return (
    <div className="flex justify-between items-center bg-blue-100 px-3">
      <h2>JWT Authentication using JSON fake server</h2>
      <header>
        {!logoutUser && login && login.userLogin ? (
          <button
            className="h-10 px-4 my-2  text-indigo-100 transition-colors 
            duration-150 bg-indigo-700 rounded-lg focus:shadow-outline
          hover:bg-indigo-800"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              className="h-10 px-4 my-2  text-indigo-100 transition-colors 
              duration-150 bg-indigo-700 rounded-lg focus:shadow-outline
            hover:bg-indigo-800"
            >
              Login
            </button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
