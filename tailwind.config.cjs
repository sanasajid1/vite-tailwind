/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0e1851",
      orange: "#ffc61a",
      black: "#000000",
      gray: "#595959",
      lightgray: "#a6a6a6",
      indigo: "#4b0082",
      white: "#ffffff",
      yellow: "#ffff00",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
