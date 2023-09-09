/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {
        backgroundImage: {
          'image1': "url('/images/image1.jpg')",
          'image2': "url('/')",
        },
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
};