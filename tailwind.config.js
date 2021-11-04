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
                    900: "#38322c",
                    800: "#4e443b",
                    700: "#63564a",
                    600: "#786859",
                    500: "#8d7967",
                    400: "#a28b76",
                    300: "#b79c85",
                    200: "#c5a88f",
                    100: "#d3b398",
                    50: "#e1bfa2",
                    
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