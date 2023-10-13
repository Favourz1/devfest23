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
      }
    },
  },
  plugins: [],
}

