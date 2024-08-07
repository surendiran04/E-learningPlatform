/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple" : "#081A51",
        "light-white" : "rgba(255,255,255,0.18)",
        'main-color':'#8e44ad',
        'r':'#FF0000', //red
        'orange':'#f39c12',
        'light-color':'#888',
        'light-bg':'#eee',
        'lb':'#457b9d',
        'darkb':'#1d3557', //dark blue1
        'lg':'#2f4550',
        'bl':'#023047',
        'gb':'#40A578', //green blue
        'db':'#006769', //dark blue2
        'db3':'#222E3D',//dark blue3
        'db4':'#01241B', //dark black1
        'gold1':'#FCBF07',
        'dg':'#013528', //dark green
        'v1':'#49243E', // violet 1
        'b2':'#6AD4DD', //blue 2
        'sw':'#FEFAF1', // sandel white
        'lb2':'#2D95EC', // lite blue 2
        'lb3':'#FFF1D7',
        'e':'#363636', // elephant color
        'white':'#fff',
        'border':'rgba(0,0,0,.2)'

      }
    },
  },
  plugins: [],
}

