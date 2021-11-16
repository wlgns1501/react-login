import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import "./main.css";
// eslint-disable-next-line
import Home from "./pages/Home";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
// import Navbar from "./pages/Navbar";
// import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
    // <Route path="/main" exact component={main}></Route>
  );
}

export default App;
