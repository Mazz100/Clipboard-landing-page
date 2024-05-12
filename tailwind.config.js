/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    backgroundColor: {
      "background-iOS": "#26baa4",
      "background-Mac": "#6173ff",
    },

    extend: {
      fontFamily: {
        "Bai-Jamjuree": ["Bai Jamjuree", "sans-serif"],
      },

      boxShadow: {
        "iOS-shadow": "0 4px 10px  rgba(38, 186, 164, 0.4)",
        "Mac-shadow": "0 4px 10px rgba(97, 115, 255, 0.4)",
      },

      borderColor: {
        "iOS-border-color": "#49a896",
        "Mac-border-color": "#727dd6",
      },

      backgroundColor: {
        "hover-iOS": "#5dccbb",
        "hover-Mac": "#8896ff",
      },

      colors: {
        "hover-links": "#26baa4",
      }
    },
  },
  plugins: [],
};
