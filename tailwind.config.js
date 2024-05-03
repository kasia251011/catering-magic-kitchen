/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },

    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        galada: ["Galada", "sans"],
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#FF8D37",
        "text-dark": "#1B1918",
      },
    },
  },
  plugins: [],
};
