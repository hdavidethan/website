/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      customBlack: "#181925",
      customGray: "#3E505B",
      customOrange: "#E06D06",
      customWhite: "#F8F7F9",
    },
    extend: {},
  },
  plugins: [],
};
