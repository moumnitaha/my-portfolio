import { useEffect, useRef, useState } from "react";
import React from "react";
import me from "./assets/me.png";
import cv from "./assets/cv-fs.pdf";
import "./App.css";

const App = () => {
  const [copied, setCopied] = useState(false);
  let scrollContainerRef = useRef(null);
  //   useEffect(() => {
  //     const scrollContainer = scrollContainerRef.current;
  //     let scrollAmount = 0;
  //     const scrollStep = 300; // Amount to scroll each time
  //     const scrollInterval = 3000; // Time in milliseconds between scrolls

  //     const scrollProjects = () => {
  //       if (scrollContainer) {
  //         if (
  //           scrollAmount <
  //           scrollContainer.scrollWidth - scrollContainer.clientWidth
  //         ) {
  //           scrollAmount += scrollStep;
  //         } else {
  //           scrollAmount = 0; // Reset to the beginning when reaching the end
  //         }
  //         scrollContainer.scrollTo({
  //           left: scrollAmount,
  //           behavior: "smooth",
  //         });
  //       }
  //     };

  //     const intervalId = setInterval(scrollProjects, scrollInterval);

  //     return () => clearInterval(intervalId); // Cleanup interval on component unmount
  //   }, []);
  return (
    <main className="w-full h-svh bg-stone-200 flex flex-col justify-center items-center p-12">
      <div className="bg-slate-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-y-auto">
        <nav className=" p-4 flex h-auto flex-row justify-between items-center">
          <div className="font-ottercor text-sm bg-stone-100 py-3 px-5 rounded-full border-stone-200 border">
            <span>tahamoumni@gmail.com</span>
            <button
              className={`ml-2 ${
                copied ? "bg-green-200" : "bg-white"
              } p-3 rounded-full ease-in-out transition-all min-w-20 hover:scale-105`}
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
              className="ml-2 bg-white p-3 rounded-full min-w-20 focus:bg-green-200 ease-in-out transition-all hover:scale-105"
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
          <span className="items-center font-ottercol text-stone-700">
            <a
              href="https://www.linkedin.com/in/taha-moumni-754997a0/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            &nbsp;&nbsp;&nbsp;{"/"}&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/moumnitaha"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </a>
            &nbsp;&nbsp;&nbsp;{"/"}&nbsp;&nbsp;&nbsp;
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Blank
            </a>
          </span>
        </nav>
        <section className="flex flex-col items-center">
          <img
            src={me}
            alt="me"
            className="w-32 h-32 rounded-full mix-blend-multiply border-4 border-stone-200 hover:scale-110 ease-in-out transition-all m-1 bg-gradient-to-b from-stone-500 to-stone-100 cursor-pointer"
          />
          <div className="flex flex-col items-center bg-gradient-to-r from-stone-900  to-stone-400 text-transparent bg-clip-text">
            <h1 className="font-ottercob text-4xl ">Taha Moumni</h1>
            <h2 className="font-ottercol text-2xl ">Software Engineer</h2>
            <h3 className="font-ottercol text-lg ">
              Building software solutions
            </h3>
            <h3 className="font-ottercol text-lg ">
              that make the world a better place.
            </h3>
          </div>
        </section>
        <hr className="w-8/9 border-stone-200 m-16" />
        <section className="flex flex-col items-center">
          <h1 className="bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text font-ottercob text-3xl text-stone-700">
            Projects
          </h1>
          <div
            id="projects-container"
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-5 p-4 w-full m-auto"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text p-5 rounded-3xl border border-stone-200 aspect-video"
              >
                <h1 className="font-ottercob text-2xl">Project {index + 1}</h1>
                <p className="font-ottercol text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec urna at erat tincidunt luctus. Donec non nisl nec
                  eros scelerisque.
                </p>
              </div>
            ))}
          </div>
        </section>
        <hr className="w-8/9 border-stone-200 m-16" />
        <section className="flex flex-col items-center">
          <h1 className="bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text font-ottercob text-3xl text-stone-700">
            About
          </h1>
          <div className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text rounded-3xl border border-stone-200 w-auto p-4 my-10 mx-4">
            <p className="font-ottercol text-md">
              I'm a self taught software engineer with a passion for building
              web applications that make the world a better place. I have
              experience with a variety of technologies including React,
              Node.js, Express, MongoDB, and more. I'm always looking to learn
              new things and improve my skills. I'm currently looking for new
              opportunities to work on exciting projects with a great team. If
              you're interested in working with me, feel free to reach out!
            </p>
          </div>
        </section>
        <hr className="w-8/9 border-stone-200 m-16" />
        <section className="flex flex-col items-center">
          <h1 className="bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text font-ottercob text-3xl text-stone-700">
            Contact Me
          </h1>
          <div className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text rounded-3xl border border-stone-200 w-full p-4 my-10">
            <input
              type="email"
              placeholder="Email"
              className="font-ottercol text-sm bg-stone-100 py-3 px-5 rounded-full border-stone-200 border w-1/2 mb-5 text-stone-900"
            />
            <textarea
              placeholder="Message"
              className="font-ottercol text-sm bg-stone-100 py-3 px-5 rounded-3xl border-stone-200 border w-1/2 h-32 mb-5 text-stone-900"
            />
            <button className="font-ottercol text-sm bg-stone-100 py-3 px-5 rounded-full border-stone-200 border w-1/2 text-stone-900">
              Send
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
