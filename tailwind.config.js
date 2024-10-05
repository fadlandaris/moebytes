/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#5319bf",
        secondary: "#2a0b41",
        tertiary: "#1a0629",
        title: "#e2d8e3",
        blackPrimary: "#000000",
        darkGray: "#404040",
        medGray: "#525252",
        lightGray: "#e2e1dd"

      },
      fontFamily: {
        epilogue: ['Epilogue', ],
        montserrat: ['Montserrat', ],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};