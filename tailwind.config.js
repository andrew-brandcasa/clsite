/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'welcome-beige': '#F8F6F0',
        'history-beige': '#F0EDE6',
        'cream': '#E8DCC0',
        'dark-brown': '#3C2415',
        'darker-brown': '#2C1810',
        'gold': '#D4AF37',
        'bronze': '#CD7F32',
        'pink-truck': '#E91E63',
        'footer-dark': '#2C2C2C',
      },
      fontFamily: {
        'brawler': ['Brawler', 'serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      height: {
        'screen-hero': '100vh',
      }
    },
  },
  plugins: [],
};