import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { BsHeartFill } from "react-icons/bs";
import { gsap } from "gsap";
import Container from "./components/Container";

const App = () => {
  useEffect(() => {
    gsap.fromTo(
      "footer",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);
  return (
    <Router>
      {/* <main
        className="w-[calc(100svw-1rem)] h-full bg-[#f9f9f9] flex flex-col items-center overflow-hidden"
        id="main"
      > */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Container />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="text-center text-gray-500 font-ottercol text-xs h-6 w-[calc(100svw-1rem)] flex items-center justify-center group cursor-pointer hover:font-ottercor">
        Made with <BsHeartFill className="mx-2 group-hover:text-red-500" /> by
        Taha Moumni 2024.
      </footer>
      {/* </main> */}
    </Router>
  );
};

export default App;
