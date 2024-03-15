/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', './public/**/*.js'],
  theme: {},
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
