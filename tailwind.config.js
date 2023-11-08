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
        'quincyLarson': "url('./assets/images/speakers/quincy-larson.webp')",
        'kelseyHightower': "url('./assets/images/speakers/kelsey-hightower.webp')",
        'aliSpittel': "url('./assets/images/speakers/ali-spittel.webp')",
        'laolu': "url('./assets/images/speakers/laolu.webp')",
        'mayowa': "url('./assets/images/speakers/mayowa.webp')",
        'techDan': "url('./assets/images/speakers/onoriukpe_daniel.webp')",
        'ukpaiUgochi': "url('./assets/images/speakers/ukpai-ugochi.webp')",
        'charlesFreeborn': "url('./assets/images/charlesfreeborn.jfif')",
        'tejiri': "url('./assets/images/oghenetejiri_agbodoroba.png')",
        'kelvinForteta': "url('./assets/images/kelvin_forteta.jpg')",
      }
    },
  },
  plugins: [],
}

