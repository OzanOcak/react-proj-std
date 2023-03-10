import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { createStore } from "redux";
import reducers from "./store/reducers";
import { Provider } from "react-redux";

const createStoreMiddleWare = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={createStoreMiddleWare(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);
