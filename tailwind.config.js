/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
        sans:   ['Fredoka', 'sans-serif'],
        serif:  ['Gaegu', 'serif']
    },
    extend: {
      colors: {
        antiflash:  '#F0F0F0',
        delftblue:  '#213555',
        trueblue:   '#4F709C',
        flax:       '#E5D283',
      }
    }
  },
  plugins: [],
}

