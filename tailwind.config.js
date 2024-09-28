/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'primary': 'rgb(33, 31, 75)',
        'secondary': ' #2b2d77'
        
      }
    },
    fontFamily: {
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

