/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { cream: '#fbf6f1', ink: '#302823', rose: '#b87572', blush: '#f1dfd9', sand: '#e8d8ca', sage: '#879184' },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] },
    boxShadow: { soft: '0 14px 45px rgba(70,45,35,.08)' }
  }},
  plugins: []
}