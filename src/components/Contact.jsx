import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 10%",
      //   once: true,
      onEnter: () => {
        ["email", "message", "send"].forEach((id, index) => {
          gsap.fromTo(
            `#${id}`,
            { opacity: 0, x: index % 2 ? -300 : 300 },
            { opacity: 1, x: 0, duration: 0.75 }
          );
        });
      },
    });
  }, []);
  return (
    // <div className="bg-gray-50 w-full h-full p-5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
    <section
      className="flex flex-col items-center h-[calc(100svh-1.5rem)] w-[calc(100svw-2rem)] pt-24 mr-8"
      id="contact"
      data-path="/contact"
    >
      <h1 className=" font-ottercob text-3xl text-gray-700">Contact Me</h1>
      <div className="flex flex-col items-center  rounded-3xl border border-gray-200 w-full p-4 my-10 mx-4">
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="font-ottercol text-sm bg-gray-100 py-3 px-5 rounded-full border-gray-200 border w-1/2 mb-5 text-gray-900 opacity-0"
        />
        <textarea
          id="message"
          placeholder="Message"
          className="font-ottercol text-sm bg-gray-100 py-3 px-5 rounded-3xl border-gray-200 border w-1/2 h-32 mb-5 text-gray-900 opacity-0"
        />
        <button
          id="send"
          className="font-ottercol text-sm bg-gray-100 py-3 px-5 rounded-full border-gray-200 border w-1/2 text-gray-900 opacity-0"
        >
          <span className="">Send</span>
        </button>
      </div>
    </section>
    // </div>
  );
}

export default Contact;
