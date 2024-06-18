/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#495E57',
        secondary: '#F4CE14'
      },
      fontFamily: {
        'markazi': ['"Markazi Text"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

