import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#projects",
      start: "top 10%",
      //   once: true,
      onEnter: () => {
        document.querySelectorAll("#project-c").forEach((project, index) => {
          gsap.fromTo(
            project,
            { opacity: 0, y: -300 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.25 * index,
              ease: "power2.out",
            }
          );
        });
      },
    });
  }, []);
  //   useEffect(() => {
  //     document.querySelectorAll("#project-c").forEach((project, index) => {
  //       gsap.fromTo(
  //         project,
  //         { opacity: 0, y: -300 },
  //         { opacity: 1, y: 0, duration: 0.5, delay: 0.25 * index }
  //       );
  //     });
  //   }, []);
  return (
    // <div className="bg-gray-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section
      className="prj flex flex-col items-center h-[calc(100svh-0rem)] w-[calc(100svw-2rem)] mr-8 pt-24"
      id="projects"
      data-path="/projects"
    >
      <h1 className=" font-ottercob text-3xl text-gray-700">Projects</h1>
      <div
        id="projects-container"
        // ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-5 p-4 w-full m-auto"
      >
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-5 rounded-3xl border border-gray-100 aspect-video opacity-0"
            id="project-c"
          >
            <h1 className="font-ottercob text-2xl ">Project {index + 1}</h1>
            <p className="font-ottercol text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec urna at erat tincidunt luctus. Donec non nisl nec eros
              scelerisque.
            </p>
          </div>
        ))}
      </div>
    </section>
    // </div>
  );
}

export default Projects;
