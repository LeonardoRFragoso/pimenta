/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pepper: {
          DEFAULT: '#C0392B',
          light: '#E74C3C',
          dark: '#922B21',
        },
        deep: {
          DEFAULT: '#080808',
          900: '#0D0D0D',
          800: '#141414',
          700: '#1C1C1C',
          600: '#242424',
        },
        forest: {
          DEFAULT: '#1A3A2A',
          light: '#2D5A3D',
          dark: '#0D2218',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#E8E0D0',
        },
        amber: {
          melt: '#C9973A',
          light: '#E8B84B',
          dark: '#9B7228',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(192, 57, 43, 0.5)' },
          '100%': { textShadow: '0 0 30px rgba(192, 57, 43, 0.9), 0 0 60px rgba(192, 57, 43, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
