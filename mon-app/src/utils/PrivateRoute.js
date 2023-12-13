import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const islog = useSelector((state) => state.log.token);
  return !!islog ? children : <Navigate to="/sing-in" />;
};

export default PrivateRoute;
