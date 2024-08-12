import React from "react";
import me from "../assets/me.png";
import cv from "../assets/cv-fs.pdf";

function Me() {
  const [copied, setCopied] = React.useState(false);
  return (
    // <div className="bg-stone-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section
      className="flex flex-row items-center h-[calc(100svh-5rem)] w-svw pt-24"
      id="home"
      data-path="/"
    >
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={me}
          alt="me"
          className="w-56 h-56 rounded-full border-4 border-stone-100 hover:scale-110 ease-in-out transition-all m-1 bg-gradient-to-b from-stone-500 to-stone-100 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center bg-gradient-to-r from-stone-900  to-stone-400 text-transparent bg-clip-text">
        <h1 className="font-ottercob text-8xl ">Taha Moumni</h1>
        <h2 className="font-ottercol text-5xl ">Software Engineer</h2>
        <h3 className="font-ottercol text-lg ">Building software solutions</h3>
        <h3 className="font-ottercol text-lg ">
          that make the world a better place.
        </h3>
        <div className="font-ottercor text-sm bg-stone-100 py-3 px-5 rounded-full border-stone-200 border text-stone-800 m-4">
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
      </div>
    </section>
    // </div>
  );
}

export default Me;
