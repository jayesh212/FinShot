/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors :{
        'Celadon': '#bbdfc5',
        'Asparagus': '#60935d',
        'darkgreen': '#14342b'
      },
      fontFamily:{
        'sans': ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}