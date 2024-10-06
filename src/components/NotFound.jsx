import React from "react";
import nf from "../assets/404.png";

function NotFound() {
  return (
    // <div className="bg-gray-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section className="flex flex-col items-center justify-center h-[calc(100svh-1.5rem)] pt-20  w-[calc(100svw-2rem)] mr-8">
      {/* <h1 className="bg-gradient-to-r from-gray-900 to-gray-500 text-transparent bg-clip-text font-ottercob text-9xl text-gray-700">
        404
      </h1> */}
      <img src={nf} alt="404" className="animate-bounceSlow" />
      <div className="flex flex-col items-center rounded-3xl border border-gray-200 w-auto p-5 my-10 mx-4">
        <p className="font-ottercol text-md">
          Looks like you're lost. This page doesn't exist.
        </p>
      </div>
    </section>
    // </div>
  );
}

export default NotFound;
