/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1.5rem',
                sm: '3rem',
                lg: '5rem',
                xl: '6rem',
                '2xl': '7rem',
            },
        },
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
                markazi: ['"Markazi Text"', "sans"]
            }
        },
    },
    plugins: [],
}

