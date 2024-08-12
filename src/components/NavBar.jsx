import React, { useState } from "react";
import cv from "../assets/cv-fs.pdf";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

function NavBar() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="p-4 flex h-24 flex-row justify-between items-center w-full font-ottercol bg-stone-200">
      <h5 className="text-5xl font-ottercob bg-gradient-to-r from-stone-900  to-stone-400 text-transparent bg-clip-text ml-5">
        Taha Dev
      </h5>
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
      {["Home", "Projects", "About", "Contact"].map((item, index) => (
        <Link
          to={"/" + item.toLowerCase()}
          key={index}
          className="hover:underline"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            navigate(`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`);
            const element = document.getElementById(item.toLowerCase());
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {item}
        </Link>
      ))}
      <span className="flex flex-row items-center font-ottercol text-stone-700 mr-5">
        <a
          href="https://www.linkedin.com/in/taha-moumni-754997a0/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <span className="flex flex-row items-center">
            <BsLinkedin className="mx-2" />
            LinkedIn
          </span>
        </a>
        &nbsp;&nbsp;&nbsp;{"/"}&nbsp;&nbsp;&nbsp;
        <a
          href="https://github.com/moumnitaha"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <span className="flex flex-row  items-center ">
            <BsGithub className="mx-2" />
            Github
          </span>
        </a>
        &nbsp;&nbsp;&nbsp;{"/"}&nbsp;&nbsp;&nbsp;
        <a
          href="https://"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <span className="flex flex-row items-center">
            <BsInstagram className="mx-2" />
            Blank
          </span>
        </a>
      </span>
    </nav>
  );
}

export default NavBar;
