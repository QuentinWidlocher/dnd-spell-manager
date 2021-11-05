const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'up-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
            },
            colors: {
                primary: colors.amber,
                paper: {
                    900: '#433c32',
                    800: '#786950',
                    700: '#9e8967',
                    600: '#bca27a',
                    500: '#ceb690',
                    400: '#e0c9a6',
                    300: '#e7d6ba',
                    200: '#eee2ce',
                    100: '#f5eee2',
                    50: '#fcfaf6',

                },
                wood: {
                    900: "#423324",
                    800: "#5a432f",
                    700: "#72563c",
                    600: "#8a6747",
                    500: "#a37852",
                    400: "#b58b64",
                    300: "#c69b77",
                    200: "#d1a884",
                    100: "#dcb18f",
                    50: "#e7bf9d",
                }
            }
        },

    },
    variants: {
        extend: {
            ringWidth: ['focus-visible']
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}