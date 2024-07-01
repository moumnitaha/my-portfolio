import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import Typewriter from "typewriter-effect/dist/core";

import "./App.css";

const App = () => {
  let ref = useRef(null);
  useEffect(() => {
    const app = ref.current;
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString("A simple yet powerful native javascript")
      .pauseFor(300)
      .deleteChars(10)
      .typeString(
        "<strong>JS</strong> plugin for a cool typewriter effect and "
      )
      .typeString(
        '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
      )
      .pauseFor(1000)
      .start();
  }, []);
  return (
    <main className="w-full h-svh bg-gray-950 flex flex-col">
      <div className="w-full h-24 bg-[#081b29] flex flex-row items-center p-5 justify-between font-poppins">
        <h1>PORTFOLIO</h1>
        <section className="flex flex-row items-center w-1/3 justify-between font-bold text-2xl">
          <div className="font-bold">Home</div>
          <div>Projects</div>
          <div>About</div>
          <div>Contact</div>
        </section>
      </div>
      <div className="w-full flex-1 bg-[#081b29] flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white font-bold ">
          Hello, I{"'"}m Moumni Taha
        </h1>
        <p className="text-white text-3xl">I{"'"}m a web developer</p>
        <div ref={ref}></div>
      </div>
    </main>
  );
};

export default App;
