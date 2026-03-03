/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#849b87', // Restful Sage Green
          hover: '#6a826d',
          light: '#e8ecea', // Very soft sage tint
        },
        accent: {
          DEFAULT: '#d0a98f', // Soft Terracotta / Clay
        },
        background: '#fcfbf8', // Oatmeal / Cream
        surface: '#f3f0e9', // Warm beige for alternating sections
        card: '#fbfaf6', // Warm off-white for cards, no pure white
        text: {
          main: '#44403c', // Warm dark stone
          muted: '#78716c', // Warm gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
