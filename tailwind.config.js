module.exports = {
  content: [
    "./src/**/*.{html,njk,md}",
    "./src/**/*.js"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography")
],
};
