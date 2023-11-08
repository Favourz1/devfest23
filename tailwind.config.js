/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', "sans-serif"],
        inter: ['Inter', "sans-serif"]
      },
      colors: {
        primaryBlue: "#4285F4",
        primaryRed: "#EA4335",
        primaryYellow: "#F9AB01",
        primaryGreen: "#00A150",
      },
      backgroundImage: {
        'quincyLarson': "url('src/assets/images/speakers/quincy-larson.webp')",
        'kelseyHightower': "url('src/assets/images/speakers/kelsey-hightower.webp')",
        'aliSpittel': "url('src/assets/images/speakers/ali-spittel.webp')",
        'laolu': "url('src/assets/images/speakers/laolu.webp')",
        'mayowa': "url('src/assets/images/speakers/mayowa.webp')",
        'techDan': "url('src/assets/images/speakers/onoriukpe_daniel.webp')",
        'ukpaiUgochi': "url('src/assets/images/speakers/ukpai-ugochi.webp')",
        'charlesFreeborn': "url('src/assets/images/charlesfreeborn.jfif')",
        'tejiri': "url('src/assets/images/oghenetejiri_agbodoroba.png')",
        'kelvinForteta': "url('src/assets/images/kelvin_forteta.jpg')",
      }
    },
  },
  plugins: [],
}

