import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: null,
  id: "",
  userNameEdit: "",
};

const dataUser = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
    },
    setUserEdit: (state, action) => {
      state.userName = action.payload.userName;
    },
    setUserReset: (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.userName = null;
      state.id = "";
      state.userNameEdit = "";
    },
  },
});

export const { setUserProfile, setUserEdit, setUserReset } = dataUser.actions;

export default dataUser.reducer;
