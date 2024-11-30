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
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
