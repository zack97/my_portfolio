// src/App.js ok ok
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Works from "./components/Works";
import SingleWork from "./components/SingleWork";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./i18n";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/single-work" element={<SingleWork />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
