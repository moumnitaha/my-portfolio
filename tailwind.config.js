/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
          "0%": { transform: "transtoneX(-100%)", opacity: 0 },
          "100%": { transform: "transtoneX(0)", opacity: 1 },
        },
      },
      transitionDelay: {
        0: "0ms",
        200: "200ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
