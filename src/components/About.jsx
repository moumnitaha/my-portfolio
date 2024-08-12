import React from "react";

function About() {
  return (
    // <div className="bg-slate-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section
      className="flex flex-col items-center h-[calc(50svh)] pt-24"
      id="about"
    >
      <h1 className="bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text font-ottercob text-3xl text-stone-700">
        About
      </h1>
      <div className="flex flex-col items-center bg-stone-100 rounded-3xl border border-stone-200 w-auto p-5 my-10 mx-4">
        <p className="font-ottercol text-sm">
          I'm a self taught software engineer with a passion for building web
          applications that make the world a better place. I have experience
          with a variety of technologies including React, Node.js, Express,
          MongoDB, and more. I'm always looking to learn new things and improve
          my skills. I'm currently looking for new opportunities to work on
          exciting projects with a great team. If you're interested in working
          with me, feel free to reach out!
        </p>
      </div>
    </section>
    // </div>
  );
}

export default About;
