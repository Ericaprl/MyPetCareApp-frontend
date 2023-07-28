
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MapSearch from "./components/MapSearch";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";

function allRoutes() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mapSearch" element={<MapSearch />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<Welcome />} />



      </Routes>

    </Router>
  );
}
export default allRoutes;