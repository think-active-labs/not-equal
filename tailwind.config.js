/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
