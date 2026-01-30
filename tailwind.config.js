/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-blue)',
        secondary: 'var(--secondary-blue)',
      },
      fontFamily: {
        main: ['var(--font-main)', 'sans-serif'],
      },
      maxWidth: {
        'container-xl': 'var(--container-xl)',
      },
    },
  },
  plugins: [],
};
