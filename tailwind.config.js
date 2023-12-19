/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/stories/**/*.{html,js,jsx}",
    "./src/stories/**/*.stories.{html,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
     },
    },
    extend: {},
  },
  plugins: [],
}

