// router.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddEwaste from "./pages/AddEwaste";  // Correct import
import Tracking from "./pages/Tracking";
import Profile from "./pages/Profile";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-ewaste" element={<AddEwaste />} />  {/* Correct usage */}
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesConfig;
