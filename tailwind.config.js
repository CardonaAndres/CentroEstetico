/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPurple: "#D4C7F2", // Color del logo
        pastelBlue: "#C8E0F4", // Color del logo
        pastelPink: "#F4D8E3", // Color del logo
        pastelGreen: "#C9E4D6", // Color del logo
        darkText: "#333333",   // Texto oscuro elegante
      }
    },
  },
  plugins: [],
}