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
        'red':'#e74c3c',
        'orange':'#f39c12',
        'light-color':'#888',
        'light-bg':'#eee',
        'black':'#2c3e50',
        'white':'#fff',
        'border':'rgba(0,0,0,.2)'

      }
    },
  },
  plugins: [],
}

