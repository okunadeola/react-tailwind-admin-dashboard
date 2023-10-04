/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors:{
        lighten: '#f1f1f1'
      },
      dropShadow: {
          1: '0px 1px 0px #E2E8F0',
          2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
