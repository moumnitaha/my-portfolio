import React from "react";

function Projects() {
  return (
    <div className="bg-slate-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <section className="flex flex-col items-center">
        <h1 className="bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text font-ottercob text-3xl text-stone-700">
          Projects
        </h1>
        <div
          id="projects-container"
          // ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-5 p-4 w-full m-auto"
        >
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text p-5 rounded-3xl border border-stone-200 aspect-video"
            >
              <h1 className="font-ottercob text-2xl">Project {index + 1}</h1>
              <p className="font-ottercol text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec urna at erat tincidunt luctus. Donec non nisl nec eros
                scelerisque.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
