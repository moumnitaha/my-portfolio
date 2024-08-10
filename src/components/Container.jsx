import React from "react";
import Me from "./Me";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";

function Container() {
  return (
    <main className="w-full h-svh bg-stone-200 flex flex-col justify-center items-center p-12">
      <NavBar />
      <div className="bg-slate-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-y-scroll">
        <Me />
        <hr className="w-8/9 border-stone-200 m-16" />
        <About />
        <hr className="w-8/9 border-stone-200 m-16" />
        <Projects />
        <hr className="w-8/9 border-stone-200 m-16" />
        <Contact />
      </div>
    </main>
  );
}

export default Container;
