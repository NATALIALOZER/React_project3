import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
// import { store } from "./store/index";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);