import React from "react";
import logo from "../assets/img/argentBankLogo.png";
import { logout } from "./../reducers/log";
import { setUserReset } from "../reducers/user.reducer";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const data = useSelector((state) => state.user);
  const log = useSelector((state) => state.log.token);
  const dispatch = useDispatch();

  const SignOut = () => {
    dispatch(logout());
    dispatch(setUserReset());
  };

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
            <NavLink className="main-nav-item" to="/bank">
              <i className="fa fa-user-circle"></i>
              {data.userName}
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={SignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/sing-in">
            <i className="fa fa-sign-in"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
