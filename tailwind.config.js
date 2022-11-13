/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#112c51",
        gray: "#cececf",
        red: "#a61e15",
      },
      borderWidth: {
        16: "16px",
      },
    },
  },
  plugins: [],
};
