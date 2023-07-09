
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

function allRoutes() {
  return (
    <Router>

      <Routes>

        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/profile" component={Profile} />


      </Routes>
      
    </Router>
  );
}
export default allRoutes;