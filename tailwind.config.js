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
        charcoal: '#1e1e1e',
      },
    },
  },
  safelist: ['text-neonPink', 'bg-black'],
  plugins: [],
  extend: {
  animation: {
    fadeIn: 'fadeIn 0.7s ease-in-out forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
}

};