/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        "defaultHeight": "5vh",
      },
      colors: {
        "primaryGray" : "#737373",
        "lightGray" : "#a6a6a6",
        "secondaryGray": "#f3f4f6",
        "primaryGreen":"rgb(21 128 61)",
        "secondaryGreen":"#7ed957"
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'tab': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mob': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
         // => @media (min-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        'lato-thin': ['Lato', 'sans-serif'],
        'lato-light': ['Lato', 'sans-serif'],
        'lato-regular': ['Lato', 'sans-serif'],
        'lato-bold': ['Lato', 'sans-serif'],
        'lato-black': ['Lato', 'sans-serif'],
        'lato-thin-italic': ['Lato', 'sans-serif'],
        'lato-light-italic': ['Lato', 'sans-serif'],
        'lato-regular-italic': ['Lato', 'sans-serif'],
        'lato-bold-italic': ['Lato', 'sans-serif'],
        'lato-black-italic': ['Lato', 'sans-serif'],
      },
      fontWeight: {
        100: '100',
        300: '300',
        400: '400',
        700: '700',
        900: '900',
      },
      fontSize:{
        "FrontPageHeadSize": "8vh",
        "FrontPageSubHeadSize": "2.6vh",
        "FrontPageHeadSizeMobile": "4vh",
      },
      fontStyle: {
        'italic': 'italic',
      },
      lato: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}