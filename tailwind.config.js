/** @type {import('tailwindcss').Config} */
import noiseImage from "./src/assets/noise.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grainy-gradient":
          "linear-gradient(to right, #f9f9f9, #feb47b), url(${noiseImage.src})",
      },
      fontFamily: {
        poppins: ["Poppins"],
        ottercor: ["Otterco-regular", "sans-serif"],
        ottercol: ["Otterco-light", "sans-serif"],
        ottercob: ["Otterco-bold", "sans-serif"],
        ottercom: ["Otterco-medium", "sans-serif"],
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "trangrayX(-100%)", opacity: 0 },
          "100%": { transform: "trangrayX(0)", opacity: 1 },
        },
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "50% 60% 60% 50% / 40% 50% 50% 60%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "75%": { borderRadius: "40% 50% 60% 50% / 60% 40% 50% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        "move-grain": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-2%, -2%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
        bounceSlow: "bounce 8s infinite",
        "grainy-background": "move-grain 8s infinite",
      },
      transitionDelay: {
        0: "0ms",
        200: "200ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
