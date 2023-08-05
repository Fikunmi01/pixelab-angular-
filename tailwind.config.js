/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Kurale', 'serif'],
      },
      colors: {
        'orange': '#FF6600',
        'darkBlue': '#0B1B35',
        'lightGray': '#8A898E',
        'lightBlue': '#1E0E62'
      }
    },
  },
  plugins: [],
}