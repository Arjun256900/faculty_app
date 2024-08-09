import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
