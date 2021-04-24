module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  presets: [
    require('@zakodium/tailwind-config')({
      colors: {
        additional: [
          'gray',
          'blue',
          'red',
          'blue-gray',
          'true-gray',
          'cool-gray',
          'light-blue',
        ],
      },
    }),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {
      fontWeight: ['group-hover', 'hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
