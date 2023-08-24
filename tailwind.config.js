/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {
      fontSize: {
        lsm: ['0.9375rem', '1.375rem'],
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      colors: {
        primery: '#545454',
        secondary: '#EDEDED',
        'light-grayish': '#8F8F8F',
        'almost-dark': '#303030',
        'light-blue': '#5CE1E6',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
}
