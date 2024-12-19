/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Space Mono, monospace',
    },
    extend: {
      fontFamily: {
        huge: '',
      },
      colors: {
        stone: {
          // 700: 'rgb(224 220 215)',
          // 600: 'rgb(190 181 170)',
          // 500: '#718096',
        },
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
