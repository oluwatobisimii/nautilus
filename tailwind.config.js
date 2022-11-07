/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      fontFamily: {
        'cabinet': ["Cabinet Grotesk"],
        'space-grotesk': ["Space Grotesk"]
      },
    },
  },
  plugins: [],
}
