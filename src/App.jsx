import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { BsHeartFill } from "react-icons/bs";

const App = () => {
  return (
    <Router>
      <main className="w-[calc(100svw)] h-[calc(100svh-0rem)] bg-[#f9f9f9] flex flex-col items-center overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="text-center text-stone-500 font-ottercol text-xs h-6 w-svw flex items-center justify-center">
          Made with <BsHeartFill className="mx-2" /> by Taha Moumni 2024.
        </footer>
      </main>
    </Router>
  );
};

export default App;
