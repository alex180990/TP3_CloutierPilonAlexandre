/** @type {import('tailwindcss').Config} */
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
    },
    plugins: [
      require('flowbite/plugin')
    ],
};