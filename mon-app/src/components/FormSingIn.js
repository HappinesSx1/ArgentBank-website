import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "./../reducers/log";
import { setUserProfile } from "../reducers/user.reducer";
// Api
import axios from "axios";
//React router dom
import { useNavigate } from "react-router-dom";

const FormSingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Affichage error
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");

  //Dispatch
  const dispatch = useDispatch();
  // Redirection
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        loginData
      );

      const token = response.data.body.token;

      //Supprimer ici a la fin du projet
      console.log("data api :", response.data);
      console.log("Token :", token);

      dispatch(login({ token }));
      // Redirection Home
      navigate("/bank");

      try {
        const responseUser = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "application/json",
            },
          }
        );

        const profileUser = responseUser.data.body;

        // console.log("Data API:", profileUser);

        dispatch(setUserProfile(profileUser));
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("Invalid email or password");
        } else if (error.response.status === 500) {
          setServerError("Internal Server Error");
        }
      } else {
        setServerError("Network Error");
      }
      console.error("Error :", error.message);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE  */}
        <input type="submit" value="Sign In" className="sign-in-button" />
        {/* SHOULD BE THE BUTTON BELOW 
         <button class="sign-in-button">Sign In</button>  */}
        {error && <p>Error: {error}</p>}
        {serverError && <p>Error: {serverError}</p>}
      </form>
    </section>
  );
};

export default FormSingIn;
