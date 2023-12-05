import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const islog = localStorage.getItem("token");
  return !!islog ? children : <Navigate to="/sing-in" />;
};

export default PrivateRoute;
