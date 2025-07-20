/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neonPink: '#ff00f7',
        softRose: '#ffc0cb',
        mutedRose: '#fbb6ce',
        cocoa: '#a9746e',
      },
    },
  },
  safelist: ['text-neonPink', 'bg-black'],
  plugins: [],
};