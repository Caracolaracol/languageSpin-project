/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        avenue: 'Avenue',
        lato: 'Lato',
      },
      colors: {
        // backgrounds
        verdeSpin: 'rgb(0, 138, 138)',
        verdeSpinDark: 'rgb(0,98,102)',
        rojoSpin: 'rgb(255,87,86)',
        rojoSpinDark: 'rgb(163,55,54)',
      },
      boxShadow: {
        borderShadow:
          '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05), 0px 0px 0px 1px rgba(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
