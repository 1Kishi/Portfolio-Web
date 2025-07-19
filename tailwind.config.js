/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode via class
  theme: {
    extend: {
      colors: {
        neonPink: "#FC657C",
        dustyPink: "#D27785",
        softRose: "#A77B81",
        mutedRose: "#7D7072",
        cocoa: "#523C3F",
        charcoal: "#392C2E",
      },
    },
  },
  plugins: [],
}
