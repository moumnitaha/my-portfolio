import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <main className="w-full h-svh bg-[#081b29]">
      <navbar className="w-full h-24 bg-[#081b29] flex flex-row items-center p-5 justify-between font-poppins">
        <h1>PORTFOLIO</h1>
        <section className="flex flex-row items-center w-1/3 justify-between font-extrabold text-2xl">
          <div>Home</div>
          <div>Projects</div>
          <div>About</div>
          <div>Contact</div>
        </section>
      </navbar>
    </main>
  );
}

export default App;
