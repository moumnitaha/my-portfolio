import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { gsap } from "gsap";

function NavBar() {
  const navigate = useNavigate();
  let pathname = useLocation().hash;
  console.log(pathname);

  useEffect(() => {
    document.querySelectorAll("nav a").forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, y: -60 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2 * (index + 1) }
      );
    });
    document.querySelectorAll("#social a").forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2 * (index + 1) }
      );
    });
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 0.75 }
    );
  }, []);
  return (
    <div className="flex flex-row fixed  z-50">
      <nav className="p-5 w-[calc(100svw)] flex flex-row justify-between items-center h-20 font-ottercol shadow-sm bg-[#fff]">
        <h5 className="text-3xl font-ottercob text-gray-800">
          <Link
            to="/"
            onClick={() => {
              navigate("/");
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {"<TahaDev />"}
          </Link>
        </h5>
        <div className="w-1/6 flex flex-row items-center justify-around">
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <Link
              to={`/${item === "Home" ? "" : item}`}
              key={index}
              className={`flex flex-row items-center  hover:text-gray-500 transition-all text-gray-700 text-lg hover:font-ottercob ${
                pathname === `#${item.toLowerCase()}` ||
                (pathname === "" && item === "Home")
                  ? "font-ottercob"
                  : "font-ottercor"
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation
                navigate(
                  `${item === "Home" ? "/#" : `/#${item.toLowerCase()}`}`
                );
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
      <div
        className="w-8 h-72 absolute top-[calc((100svh-18rem)/2)] left-[calc(100%-2rem)] z-50"
        id="social"
      >
        <span className="flex flex-row items-center font-ottercol text-gray-700 rotate-90">
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
    </div>
  );
}

export default NavBar;
