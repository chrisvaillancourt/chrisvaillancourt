module.exports = {
  plugins: [
    require(`tailwindcss`)(`./assets/styles/tailwind.config.js`),
    require(`autoprefixer`),
    require('postcss-import'),
  ],
};
