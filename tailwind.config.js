/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontfamily : {
        'sans' : ['Inter', 'sans-serif']
      }
    },
  },
  
  plugins: [tailwindScrollbar],
}