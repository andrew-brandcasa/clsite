/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream-light': '#F8F6F0',
        'beige-warm': '#F0EDE6',
        'warm-tan': '#E8DCC0',
        'warm-tan-hover': '#DDD0B8',
        'text-primary': '#3C2415',
        'text-secondary': '#5D4E37',
        'gold': '#D4AF37',
        'deep-gold': '#B8941F',
        'red-accent': '#8B0000',
        'pink-accent': '#E91E63',
        'footer-dark': '#2C2C2C',
      },
      fontFamily: {
        'brawler': ['Brawler', 'serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      height: {
        'screen-hero': '100vh',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      letterSpacing: {
        'wider': '0.2em',
        'widest': '0.3em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
      }
    },
  },
  plugins: [],
};