import React, { useState } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Procedures from "./components/Procedures";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Go to Home Page</Link>
          </li>
          <li>
            <Link to={"/procedures"}>See Our Procedures</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us!</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
