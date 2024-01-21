/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        babyBlue: {
          DEFAULT: '#89CFF0',
          light: '#B3E2F8',
          dark: '#569DC3',
        },
      }
    },
  },
  plugins: [],
}
