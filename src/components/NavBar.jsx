import React, { useState } from "react";
import cv from "../assets/cv-fs.pdf";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

function NavBar() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="p-4 flex h-svh flex-col justify-between items-center w-24 font-ottercol bg-stone-300">
      <h5 className="text-5xl font-ottercob bg-gradient-to-r from-stone-900  to-stone-400 text-transparent bg-clip-text text-center">
        Taha Dev
      </h5>

      {["Home", "Projects", "About", "Contact"].map((item, index) => (
        <Link
          to={`/${item === "Home" ? "" : item}`}
          key={index}
          className="hover:underline"
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
      <span className="flex flex-col items-center font-ottercol text-stone-700 mr-5">
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
    </nav>
  );
}

export default NavBar;
