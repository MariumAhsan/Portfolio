/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Playfair Display", "serif"],
    },
      colors: { brand: { DEFAULT: "#0ea5e9", dark: "#0369a1" } },
    },
  },
  plugins: [],
}
