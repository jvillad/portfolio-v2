/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['ubuntu'],
        poppins: ['Inter'],
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [],
};
