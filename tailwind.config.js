/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    [
      "./src/**/*.{html,js}",
      './index.html',
    ],
  theme: {
    backgroundColor: {
      "background-iOS": "#26baa4",
      "background-Mac": "#6173ff",
    },


    extend: {},
  },
  plugins: [],
}

