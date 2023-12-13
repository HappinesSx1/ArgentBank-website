import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const logUser = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { login, logout } = logUser.actions;

export default logUser.reducer;
