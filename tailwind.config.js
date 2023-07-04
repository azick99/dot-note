/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      colors: {
        primery: '#545454',
        secondary: '#EDEDED',
        'light-grayish':'#8F8F8F',
        'almost-dark':'#303030',
      },
    },
  },
  plugins: [],
}
