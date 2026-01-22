/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./portafolio.html",
    "./servicios.html",
    "./planes.html",
    "./nosotros.html",
    "./blog.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00f7ff',
          blue: '#0036FF',
          dark: '#0a0a0a',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'modal-in': 'modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'infinite-scroll-up': 'scrollUp 40s linear infinite',
        'infinite-scroll-down': 'scrollDown 45s linear infinite',
      },
      keyframes: {
        modalIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}