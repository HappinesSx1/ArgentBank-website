import React, { useState } from "react";
import logo from "../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [log, setLog] = useState();

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {log ? (
          <div>
            <a className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className="main-nav-item" href="./index.html">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/sing-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
