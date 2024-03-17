/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/components/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#222',
      primary: '#FFF',
      secondary: '#CCC',
      highlight: '#FF2353'
    },
    extend: {}
  },
  plugins: []
}
