/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
