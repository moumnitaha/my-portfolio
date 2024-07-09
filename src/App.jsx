import { useEffect, useRef, useState } from "react";
import manOnTable from "./assets/manOnTable.svg";
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
      .typeString("<strong>A simple yet powerful native javascript</strong>")
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
    <main className="w-full h-svh bg-slate-950 flex flex-col p-2">
      <div className="w-full h-24 bg-slate-800 flex flex-row items-center p-5 justify-between font-poppins font-bold">
        <h1>LOGO</h1>
        {/* <section className="flex flex-row bg-gray-800 items-center w-1/3 justify-between font-bold text-2xl">
          <div className="font-bold">Home</div>
          <div
            onClick={() => (window.location.href = "#")}
            className="cursor-pointer"
          >
            Projects
          </div>
          <div>About</div>
          <div>Contact</div>
        </section> */}
      </div>
      <div className="w-full flex-1 flex flex-col items-center justify-center sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        {/* first section */}
        <div className="sm:w-full md:w-full xl:w-1/2 h-full sm:h-1/2 md:h-full xl:h-full flex flex-col justify-center items-center p-5">
          <h1 className="text-6xl text-white font-bold ">
            Hello, I{"'"}m Moumni Taha
          </h1>
          <p className="text-white text-3xl">I{"'"}m a web developer</p>
          <div ref={ref}></div>
        </div>
        {/* second section */}
        <div className="sm:w-full md:w-full xl:w-1/2 h-full sm:h-1/2 md:h-full xl:h-full flex flex-col justify-center items-center p-5">
          <img
            className="aspect-square w-3/4 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full 2xl:w-full"
            src={manOnTable}
            alt="manOnTable"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
