/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0f1117',
        graphite: '#171a23',
        slatecard: '#202431',
        champagne: '#f1d8a9',
        ember: '#ff8a5b',
      },
      boxShadow: {
        premium: '0 24px 70px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
