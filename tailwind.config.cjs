/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        calistoga: ['Calistoga', 'serif']
      }
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "2rem"
      }
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px"
    }
  },
  plugins: [],
}
