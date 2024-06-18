/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#F4CE14',
                    dark: '#495E57'
                },
                secondary: {
                    light: '#FBDABB',
                    dark: '#EE9972'
                },
                highlight: {
                    light: '#EDEFEE',
                    dark: '#333'
                }
            },
            fontFamily: {
                'markazi': ['"Markazi Text"', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
}

