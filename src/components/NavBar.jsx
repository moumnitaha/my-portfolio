import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import { gsap } from "gsap";

const animateBanners = () => {
  let banner1 = document.getElementById("banner1");
  let banner2 = document.getElementById("banner2");
  let banner3 = document.getElementById("banner3");
  let banner4 = document.getElementById("banner4");
  if (banner1 && banner2 && banner3 && banner4) {
    const tl = gsap.timeline();
    tl.set([banner1, banner2, banner3, banner4], { yPercent: 0 }).to(
      [banner1, banner2, banner3, banner4],
      { yPercent: 100, stagger: 0.1 }
    );
  }
};

function NavBar() {
  const pathname = useLocation().pathname;
  useEffect(() => {
    animateBanners();
  }, [pathname]);
  return (
    <nav className="p-4 w-svw flex flex-row justify-between items-center h-20 font-ottercol bg-stone-200">
      <h5 className="text-5xl font-ottercob bg-gradient-to-r from-stone-900  to-stone-400 text-transparent bg-clip-text">
        Taha Dev
      </h5>
      {["Home", "Projects", "About", "Contact"].map((item, index) => (
        <Link
          to={`/${item === "Home" ? "" : item}`}
          key={index}
          className="hover:underline flex flex-row items-center font-ottercor"
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
      <span className="flex flex-row items-center font-ottercol text-stone-700 mr-5">
        <a
          href="https://www.linkedin.com/in/taha-moumni-754997a0/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline w-full"
        >
          <span className="flex flex-row items-center w-full">
            <BsLinkedin className="mx-2" />
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/moumnitaha"
          target="_blank"
          rel="noreferrer"
          className="hover:underline w-full"
        >
          <span className="flex flex-row items-center w-full">
            <BsGithub className="mx-2" />
            Github
          </span>
        </a>
        <a
          href="https://"
          target="_blank"
          rel="noreferrer"
          className="hover:underline w-full"
        >
          <span className="flex flex-row items-center w-fll">
            <BsInstagram className="mx-2" />
            Blank
          </span>
        </a>
      </span>
      {/* <div
        id="banner1"
        className="fixed top-0 left-0 h-svh w-1/4 backdrop-blur-sm bg-stone-800/30 z-10"
      ></div>
      <div
        id="banner2"
        className="fixed top-0 left-1/4 h-svh w-1/4 backdrop-blur-sm bg-stone-800/30 z-10"
      ></div>
      <div
        id="banner3"
        className="fixed top-0 left-2/4 h-svh w-1/4 backdrop-blur-sm bg-stone-800/30 z-10"
      ></div>
      <div
        id="banner4"
        className="fixed top-0 left-3/4 h-svh w-1/4 backdrop-blur-sm bg-stone-800/30 z-10"
      ></div> */}
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          id={`banner${index + 1}`}
          className={`fixed top-0 left-${
            index ? index + "/4" : "0"
          } h-svh w-1/4 backdrop-blur-sm bg-stone-800/30 z-10`}
        ></div>
      ))}
    </nav>
  );
}

export default NavBar;
