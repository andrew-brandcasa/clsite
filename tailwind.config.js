/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5F5DC',
        'cream': '#E8DCC0',
        'dark-brown': '#3C2415',
        'darker-brown': '#2C1810',
        'gold': '#D4AF37',
        'bronze': '#CD7F32',
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