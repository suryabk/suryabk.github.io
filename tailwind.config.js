module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "costum-dark": "#1c252e",
        "costum-dark-variant": "rgba(23, 23, 23, 0.6)",
        "costum-green": "#4cd964",
        "costum-green-variant": "rgba(76, 217, 100, 0.6)",
        "costum-red": " #ff4654",
        "costum-white": " #f9f9f9",
      },
      animation: {
        "hand-wave": "wave 2.1s infinite",
      },
      keyframes: {
        wave: {
          "0%,60%,100%": {
            transform: "rotate(0deg)",
          },
          "10%, 30%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },

          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
