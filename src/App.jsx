import React from "react";
import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

const App = () => {
  //   const BrowserRouter = createBrowserRouter();
  return (
    <Router>
      {/* <main className="w-full h-svh bg-stone-200 flex flex-col justify-center items-center p-12"> */}
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
