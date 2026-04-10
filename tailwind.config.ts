import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        fern: {
          50: '#EFF5EC',
          100: '#D4E8CC',
          DEFAULT: '#4F7942',
          dark: '#3E6234',
          light: '#6A9B58',
        },
        accent: {
          50: '#FDF0E0',
          DEFAULT: '#C8772B',
          dark: '#B5691F',
        },
        cream: {
          DEFAULT: '#FFFDF7',
          50: '#FFFDF7',
          100: '#FBF5EB',
          200: '#F3EADB',
          300: '#E6DCCC',
        },
        forest: {
          50: '#1A2B19',
          100: '#243523',
          200: '#2E4229',
          300: '#5A7553',
          400: '#8FA688',
          500: '#B5C5AD',
        },
        warm: {
          300: '#C4B8A8',
          400: '#A89A8A',
          600: '#6B5D4F',
          900: '#2C2416',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
