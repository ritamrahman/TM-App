/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#FBFCFE",
      purple: {
        400: "#c084fc",
        200: "#9333EA",
      },
      blue: {
        700: "#1d4ed8",
      },
      cyan: {
        400: "#22d3ee",
      },
      sky: {
        300: "#7dd3fc",
      },
      matBlack: {
        900: "#24484c",
      },
    },
  },
  plugins: [],
};
