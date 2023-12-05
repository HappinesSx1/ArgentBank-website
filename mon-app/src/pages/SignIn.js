import React from "react";
import Navigation from "../components/Navigation";
import Foooter from "../components/Foooter";
import FormSingIn from "../components/FormSingIn";

const SignIn = () => {
  return (
    <body>
      <Navigation />
      <main className="main bg-dark">
        <FormSingIn />
      </main>
      <Foooter />
    </body>
  );
};

export default SignIn;
