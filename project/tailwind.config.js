/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D4C92',
          light: '#1A73E8',
          dark: '#072A4F',
        },
        secondary: {
          DEFAULT: '#20B2AA',
          light: '#5FD3CB',
          dark: '#108F88',
        },
        accent: {
          DEFAULT: '#FFA500',
          light: '#FFBF40',
          dark: '#CC8400',
        },
        sky: {
          light: '#ADD8E6',
          DEFAULT: '#87CEEB',
          dark: '#4682B4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};