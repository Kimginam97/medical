/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#66CBC8',
      },
      maxHeight: {
        '55vh': '55vh', // 55% of the viewport height
        '65vh': '65vh', // 65% of the viewport height
      },
    },
  },
  plugins: [],
}
