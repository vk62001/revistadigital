// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'phone' : '320px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }