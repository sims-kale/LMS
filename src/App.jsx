import Login from './components/Login';
import React from "react";
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
   
    // <div className="App">
    //   <Login></Login>
    // </div>
    // <Router>
    //   <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route exact path="/login">
    //         <Login />
    //       </Route>
    //       <Route exact path="/login">
    //         <SignUp />
    //         </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //     </Switch>
    // </Router>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>



  );
}

export default App;
