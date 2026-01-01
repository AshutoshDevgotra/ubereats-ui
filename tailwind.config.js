/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbarHide
  ],

  safelist: [
  'bg-gradient-to-l',
  'bg-gradient-to-r',
  'from-white/90',
  'via-white/60',
  'to-transparent',
]

};
