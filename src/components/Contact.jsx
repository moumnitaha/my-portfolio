import React, { useEffect } from "react";
import { gsap } from "gsap";

function Contact() {
  useEffect(() => {
    ["email", "message", "send"].forEach((id, index) => {
      gsap.fromTo(
        `#${id}`,
        { opacity: 0, x: index % 2 ? -300 : 300 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    });
  }, []);
  return (
    // <div className="bg-stone-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section
      className="flex flex-col items-center h-[calc(100svh-5rem)] w-svw pt-24"
      id="contact"
      data-path="/contact"
    >
      <h1 className="bg-gradient-to-r from-stone-900 to-stone-500 text-transparent bg-clip-text font-ottercob text-3xl text-stone-700">
        Contact Me
      </h1>
      <div className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-stone-500 text-transparent bg-clip-text rounded-3xl border border-stone-200 w-full p-4 my-10 mx-4">
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="font-ottercol text-sm bg-stone-100 py-3 px-5 rounded-full border-stone-200 border w-1/2 mb-5 text-stone-900"
        />
        <textarea
          id="message"
          placeholder="Message"
          className="font-ottercol text-sm bg-stone-100 py-3 px-5 rounded-3xl border-stone-200 border w-1/2 h-32 mb-5 text-stone-900"
        />
        <button
          id="send"
          className="font-ottercol text-sm bg-stone-100 py-3 px-5 rounded-full border-stone-200 border w-1/2 text-stone-900"
        >
          <span className="bg-gradient-to-r from-stone-900 to-stone-500 text-transparent bg-clip-text">
            Send
          </span>
        </button>
      </div>
    </section>
    // </div>
  );
}

export default Contact;
