import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <main className="w-full h-full bg-stone-200">
        <NavBar />
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
