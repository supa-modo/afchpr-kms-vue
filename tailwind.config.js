module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(83, 87, 90)",
        customGreen: "rgb(15, 103, 31)",
        customMaroon: "rgb(159, 34, 65)",
        customGold: "rgb(180, 162, 105)",
        customGoldOp: "rgba(180, 162, 105, 50)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
