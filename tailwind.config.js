const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  purge: [],
  //good thing but not doing right now, purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
}
