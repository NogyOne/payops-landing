/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx, html}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 0.75rem rgba(97, 218, 251, 1)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
