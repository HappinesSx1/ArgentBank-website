import { createSlice } from "@reduxjs/toolkit";

const tokenLocalStorage = localStorage.getItem("token");

const initialState = {
  token: tokenLocalStorage || null,
};

const logUser = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = logUser.actions;

export default logUser.reducer;
