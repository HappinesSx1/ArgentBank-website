import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/css/main.css";
// import store from "./reducers/log";

//  REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
