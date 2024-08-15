import React, { useEffect } from "react";
import me from "../assets/me.png";
import cv from "../assets/cv-fs.pdf";
import { gsap } from "gsap";
let skills = [
  "html",
  "css",
  "tailwind",
  "js",
  "typescript",
  "react",
  "python",
  "django",
  "nodejs",
  "express",
  "docker",
  "git",
];

function Me() {
  useEffect(() => {
    skills.forEach((skill, index) => {
      gsap.fromTo(
        `#${skill}`,
        { opacity: 0, scale: 1.25, x: 100 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          delay: (index + 1) * 0.1,
        }
      );
    });
    gsap.fromTo(
      "#tech",
      { opacity: 0, x: -300 },
      { opacity: 1, x: 0, duration: 0.5, delay: 0.5 }
    );
    // gsap.fromTo(
    //   ".cc",
    //   { opacity: 0, y: -300 },
    //   { opacity: 1, y: 0, duration: 0.5 }
    // );
    gsap.fromTo(
      ".ll",
      { opacity: 0, y: 300 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    ["name", "job", "quote", "cv"].forEach((id, index) => {
      gsap.fromTo(
        `#${id}`,
        { opacity: 0, x: index % 2 ? -300 : 300 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.25 * index }
      );
    });
  }, []);
  const [copied, setCopied] = React.useState(false);
  return (
    <section
      className="flex flex-col items-center h-[calc(100svh-5rem)] w-full lg:w-1/2"
      id="home"
      data-path="/"
    >
      <div className="flex  flex-col lg:flex-row md:flex-col sm:flex-col w-full h-3/4 items-center">
        <div className="cc flex flex-col items-start text-gray-800 w-2/3">
          <h1 className="font-ottercob text-8xl" id="name">
            Taha Moumni
          </h1>
          <h2 className="font-ottercol text-5xl" id="job">
            Software Engineer
          </h2>
          <div id="quote" className="flex flex-col items-start">
            <h3 className="font-ottercol text-lg">
              Building software solutions
            </h3>
            <h3 className="font-ottercol text-lg">
              that make the world a better place.
            </h3>
          </div>
          <div
            id="cv"
            className="font-ottercor text-sm bg-gray-100 py-3 px-5 rounded-full border-gray-200 border text-gray-800 my-4"
          >
            <span>tahamoumni@gmail.com</span>
            <button
              className={`ml-2 ${
                copied ? "bg-green-200" : "bg-white"
              } p-3 rounded-full ease-in-out transition-all min-w-20 hover:scale-105 border border-gray-400`}
              onClick={() => {
                navigator.clipboard
                  .writeText("tahamoumni@gmail.com")
                  .then(() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 2000);
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            >
              {copied ? "Copied !" : "Copy"}
            </button>
            <button
              className="ml-2 bg-white p-3 rounded-full min-w-20 focus:bg-green-200 ease-in-out transition-all hover:scale-105 border border-gray-400"
              onClick={() => {
                const link = document.createElement("a");
                link.href = cv;
                link.download = "cv-Taha-Moumni.pdf";
                document.body.appendChild(link);
                link.click();
              }}
            >
              CV
            </button>
          </div>
        </div>
        <div className="ll w-1/3 flex items-center justify-center aspect-square">
          <img
            src={me}
            alt="me"
            className="animate-morph w-80 h-80 rounded-full border-4 border-gray-300 m-1 bg-gradient-to-b from-gray-500 to-gray-100 shadow-lg aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <h3 className="font-ottercob text-xl text-gray-600" id="tech">
          Tech Stack&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        </h3>
        <div className="flex flex-row justify-start w-96 flex-wrap items-start">
          {skills.map((item, index) => (
            <img
              src={`https://skillicons.dev/icons?i=${item}`}
              alt={item}
              className="m-2 w-12 h-12 z-10 drop-shadow-md cursor-pointer focus:scale-110 ease-in-out transition-all"
              key={index}
              id={item}
            />
          ))}
        </div>
        {/* <img src={`https://skillicons.dev/icons?i=${skills.join(",")}`} /> */}
      </div>
    </section>
  );
}

export default Me;
