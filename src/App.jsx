import React from "react";
import Login from './components/Login';
import AdminLogin from "./components/AdminLogin";
import Home from './components/Home';
// import About from './components/About';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  // Link
// } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/adminlogin" element={<AdminLogin/>} />
    <Route path="/signup" element={<SignUp />} />
  
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>



  );
}

export default App;
