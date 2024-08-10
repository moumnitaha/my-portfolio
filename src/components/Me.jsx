import React from "react";
import me from "../assets/me.png";

function Me() {
  return (
    <div className="bg-slate-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <section className="flex flex-row items-center mt-10">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={me}
            alt="me"
            className="w-36 h-36 rounded-full mix-blend-multiply border-4 border-stone-200 hover:scale-110 ease-in-out transition-all m-1 bg-gradient-to-b from-stone-500 to-stone-100 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center bg-gradient-to-r from-stone-900  to-stone-400 text-transparent bg-clip-text">
          <h1 className="font-ottercob text-8xl ">Taha Moumni</h1>
          <h2 className="font-ottercol text-5xl ">Software Engineer</h2>
          <h3 className="font-ottercol text-lg ">
            Building software solutions
          </h3>
          <h3 className="font-ottercol text-lg ">
            that make the world a better place.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Me;
