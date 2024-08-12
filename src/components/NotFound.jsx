import React from "react";

function NotFound() {
  return (
    // <div className="bg-slate-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section className="flex flex-col items-center bg-stone-100 justify-center h-svh">
      <h1 className="bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text font-ottercob text-9xl text-stone-700">
        404
      </h1>
      <div className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-stone-400 text-transparent bg-clip-text rounded-3xl border border-stone-200 w-auto p-5 my-10 mx-4">
        <p className="font-ottercol text-md">
          Looks like you're lost. This page doesn't exist.
        </p>
      </div>
    </section>
    // </div>
  );
}

export default NotFound;
