import { combineReducers } from "@reduxjs/toolkit";
import logUser from "./log";
import dataUser from "./user.reducer";

const rootReducer = combineReducers({
  log: logUser,
  user: dataUser,
});

export default rootReducer;
