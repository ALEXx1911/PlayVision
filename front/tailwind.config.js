// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
      "./src/index.html",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'main-color': 'linear-gradient(0deg, rgba(81, 49, 243, 1) 0%, rgba(0, 0, 0, 1) 50%)',
          'champions-color': 'rgba(81,49,243,0.24)',
          'custom-gray-color': '#eaf1fb',
        },
        colors:{
          'champions' : 'rgba(81,49,243,0.24)',
          'custom-gray': '#eaf1fb',
        }
      }
    },
    plugins: [],
  }