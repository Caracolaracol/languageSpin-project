/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // backgrounds
        verdeSpin: 'rgb(0, 138, 138)',
        rojoSpin: 'rgb(255,87,86)',
      },
    },
  },
  plugins: [],
};
