/* eslint-disable global-require */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
      },
    },
  },
  plugins: [require("tailwind-filter-utilities")],
};
