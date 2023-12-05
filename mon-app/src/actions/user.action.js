import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        username,
        password,
      }
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.message,
    });
  }
};
