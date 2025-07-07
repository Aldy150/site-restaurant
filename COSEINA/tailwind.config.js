/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./acceuil.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./image/pexels-narda-yescas-724842-1566837.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'),
  ],
}
