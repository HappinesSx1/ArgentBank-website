import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./utils/PrivateRoute";
import User from "./pages/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing-in" element={<SignIn />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route
          path="/bank"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        {/* <Route path="/bank" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
