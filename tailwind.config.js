/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        "background-1": "#2c2f36",
        "background-2": "#26292E",
      },
      clipPath: {
        footerStartStatePath:
          "polygon(65% 100%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)",
        mobileNavigationStartPath:
          "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 70%);",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
