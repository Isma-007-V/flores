/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //dISEÑO ESTETICO
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive:["Pacifico", "cursive"]
      },
      colors: {
        primary: "#e1bee7",
        secondary: "#ba68c8",
        brandDark: "#8e24aa",
        rock:"#a5d6a7",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      
    },
  },
  plugins: [],
}

