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
        very_light_green: '#EBFAF7',
        light_green: '#83C7B8',
        dark_green: '#449483',
        very_dark_green: '#033329',
      },
    },
  },
  safelist: ['text-neonPink', 'bg-black'],
  plugins: [],
  extend: {
  boxShadow: ['group-hover'],
  animation: {
    fadeIn: 'fadeIn 0.7s ease-in-out forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
      theme: {
  extend: {
    keyframes: {
      wipeRight: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      }
    },
    animation: {
      wipeRight: 'wipeRight 0.7s ease-in-out forwards',
      
    }
  }
}


    },
  },
}

};