/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./fonts/**/*.{js,ts,jsx,tsx,woff}",
  ],
  theme: {
    extend: {
      textColor : ['visited'],
      colors:{
       navbar : '#4F5665',
       navbarBt : '#0072E2' ,
       herosec : '#0B132A',
       pcolor : '#373737' , 
       p2color : '#37474F',
       mostvw : '#252525' ,
       cmcolor : '#7D7D7D' ,
       cmcolor2 : '#0B132A' ,
       footercolor : '#4F5665' ,
      }
    },
    // fontFamily: {
    //   yekanMedium: ["yekanMedium", "yekanMedium"],
    // },
    variants: {
      extend: {
          tableLayout: ['hover', 'focus'],
      },
      container: {
          center: true,
      },
  },
  },
  plugins: [],

}) 