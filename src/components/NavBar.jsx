import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { gsap } from "gsap";

function NavBar() {
  return (
    <div className="flex flex-row">
      <div className="w-8 h-72 absolute top-[calc(100svh-18rem)] left-[calc(100%-2rem)] z-50">
        <span className="flex flex-row items-center font-ottercol text-stone-700 rotate-90">
          <span className="rotate-180 hover:font-ottercob transition-all ease-in-out hover:text-blue-500">
            <a
              href="https://www.linkedin.com/in/taha-moumni-754997a0/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline w-24 flex flex-row"
            >
              <BsLinkedin className="mx-2" />
              LinkedIn
            </a>
          </span>
          <span className="rotate-180 hover:font-ottercob transition-all ease-in-out">
            <a
              href="https://github.com/moumnitaha"
              target="_blank"
              rel="noreferrer"
              className="hover:underline w-24 flex flex-row "
            >
              <BsGithub className="mx-2" />
              Github
            </a>
          </span>
          <span className="rotate-180 hover:font-ottercob transition-all ease-in-out hover:text-pink-500">
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="hover:underline w-24 flex flex-row"
            >
              <BsInstagram className="mx-2" />
              Blank
            </a>
          </span>
        </span>
      </div>
      <nav className="p-4 w-[calc(100svw)] flex flex-row justify-between items-center h-20 font-ottercol bg-[#fff] shadow-sm">
        <h5 className="text-4xl font-ottercob bg-gradient-to-r from-stone-900  to-stone-500 text-transparent bg-clip-text">
          Taha Dev
        </h5>
        <div className="w-1/4 flex flex-row items-center justify-around">
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <Link
              to={`/${item === "Home" ? "" : item}`}
              key={index}
              className="flex flex-row items-center font-ottercob hover:text-stone-500 transition-all text-stone-700 text-lg"
              //   onClick={(e) => {
              //     e.preventDefault(); // Prevent default navigation
              //     navigate(`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`);
              //     const element = document.getElementById(item.toLowerCase());
              //     if (element) {
              //       element.scrollIntoView({ behavior: "smooth" });
              //     }
              //   }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
