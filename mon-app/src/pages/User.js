import React from "react";
import Navigation from "../components/Navigation";
import Foooter from "../components/Foooter";
import Welcome from "../components/Welcome";
import Accounts from "../components/Accounts";

const User = () => {
  return (
    <body>
      <Navigation />
      <main className="main bg-dark">
        <Welcome />
        <Accounts />
      </main>
      <Foooter />
    </body>
  );
};

export default User;
