import React from "react";
import Me from "./Me";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";

function Container() {
  return (
    <main className="w-full h-full bg-gray-200">
      <NavBar />
      <Me />
      {/* <hr className="w-8/9 border-gray-300 m-16" /> */}
      <Projects />
      {/* <hr className="w-8/9 border-gray-300 m-16" /> */}
      <About />
      {/* <hr className="w-8/9 border-gray-300 m-16" /> */}
      <Contact />
    </main>
  );
}

export default Container;
