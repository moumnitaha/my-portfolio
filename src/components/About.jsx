import React from "react";

function About() {
  return (
    // <div className="bg-gray-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section
      className="flex flex-col items-center h-[calc(100svh-0rem)] w-[calc(100svw-2rem)] mr-8 pt-24"
      id="about"
      data-path="/about"
    >
      <h1 className=" font-ottercob text-3xl text-gray-700">About</h1>
      <div className="flex flex-col items-center bg-gray-100 rounded-3xl border border-gray-200 w-auto p-5 my-10 mx-4">
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
