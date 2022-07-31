/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "428px",
      // => @media (min-width: 428px) { ... }

      lg: "834px",
      // => @media (min-width: 834px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        hkpcblue: "#1B75BC",
        hkpcdarkerblue: "#0054A6",
        hkpcgrey: "#546670",
        grey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
