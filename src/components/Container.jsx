import React from "react";
import Me from "./Me";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { ReactLenis } from "lenis/react";

function Container() {
  return (
    <ReactLenis root>
      <section className="bg-[#f9f9f9]">
        {/* <NavBar /> */}
        <Me />
        <Projects />
        <About />
        <Contact />
      </section>
    </ReactLenis>
  );
}

export default Container;
