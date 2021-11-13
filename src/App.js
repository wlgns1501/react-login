import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
// eslint-disable-next-line
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home1" element={<Main />}></Route>
        <Route path="/home2" element={<>page</>}></Route>
      </Routes>
    </Router>
    // <Route path="/main" exact component={main}></Route>
  );
}

export default App;
