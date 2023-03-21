import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
        navigate("/");
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <h2 className="text-gray-300 text-3xl my-5 justify-center">Login </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className="w-full max-w-5xl "
        noValidate
        autoComplete="off"
        onSubmit={login}
      >
        <TextField
          id="username"
          label="Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="h-10 px-4 my-2  text-indigo-100 transition-colors 
          duration-150 bg-indigo-700 rounded-lg focus:shadow-outline
        hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account then please do{" "}
        <Link
          to="/register"
          className="text-red-400 underline hover:text-red-600"
        >
          Register
        </Link>{" "}
        yourself
      </p>
    </div>
  );
};

export default Login;
