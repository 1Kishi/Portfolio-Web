/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
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