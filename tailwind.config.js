module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
        ],
      },
    }),
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {
      fontWeight: ['group-hover', 'hover'],
      fill: ['group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
};
