/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0036FF',
          dark: '#020202',
          surface: '#0A0A0A',
          bg: '#020617',
          cyan: '#00f7ff',
          dim: '#64748B',
          gray: '#888888',
          light: '#F3F3F3'
        }
      },
      fontFamily: {
        sans: ['Inter Tight', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        ui: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 54, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #000000 0%, #0a0a0a 50%, #0036FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'infinite-scroll-up': 'scrollUp 30s linear infinite',
        'infinite-scroll-down': 'scrollDown 35s linear infinite',
        'border-pulse': 'borderPulse 3s infinite',
        'text-flow': 'textFlow 5s ease infinite',
        'grid-flow': 'gridFlow 4s linear infinite',
        'blob': 'blob 7s infinite',
        'modal-in': 'modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseGlow: { '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 54, 255, 0.2)' }, '50%': { opacity: '.8', boxShadow: '0 0 40px rgba(0, 54, 255, 0.5)' } },
        borderPulse: { '0%, 100%': { borderColor: 'rgba(255, 255, 255, 0.1)' }, '50%': { borderColor: '#0036FF', boxShadow: '0 0 20px rgba(0, 54, 255, 0.4)' } },
        scrollUp: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(-50%)' } },
        scrollDown: { '0%': { transform: 'translateY(-50%)' }, '100%': { transform: 'translateY(0)' } },
        textFlow: { '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' }, '50%': { 'background-size': '200% 200%', 'background-position': 'right center' } },
        gridFlow: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '0 4rem' } },
        blob: { '0%': { transform: 'translate(0px, 0px) scale(1)' }, '33%': { transform: 'translate(30px, -50px) scale(1.1)' }, '66%': { transform: 'translate(-20px, 20px) scale(0.9)' }, '100%': { transform: 'translate(0px, 0px) scale(1)' } },
        modalIn: { from: { opacity: '0', transform: 'scale(0.95) translateY(20px)' }, to: { opacity: '1', transform: 'scale(1) translateY(0)' } }
      }
    }
  }
}