import React, { useState } from "react";
import cv from "../assets/cv-fs.pdf";
import { Link } from "react-router-dom";

function NavBar() {
  const [copied, setCopied] = useState(false);
  return (
    <nav
      className=" p-4 flex h-auto flex-row justify-between items-center w-full bg-slate-50 rounded-3xl
	  mb-5 shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)]"
    >
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
          to={`/${item === "Home" ? "" : item.toLowerCase()}`}
          key={index}
          className="hover:underline"
        >
          {item}
        </Link>
      ))}
      <span className="items-center font-ottercol text-stone-700 mr-5">
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
  );
}

export default NavBar;
