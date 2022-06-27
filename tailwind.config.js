/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
    fontFamily: {
      header: ['Take Cover'],
      subtitle: ['Nixie One'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
