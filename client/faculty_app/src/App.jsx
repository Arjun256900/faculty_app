import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
