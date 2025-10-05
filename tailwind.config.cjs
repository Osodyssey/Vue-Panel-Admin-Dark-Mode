module.exports = /** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#212121',
        bgSecondary: '#303030',
        textLight: '#E0E0E0',
        accent: '#6C63FF'
      }
    }
  },
  plugins: []
}
