/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      rale: ['Raleway']
    },
    extend: {
      colors: {
        danger: "#ff0000",
        info: {
          100: '#f3f4f6',
          200: '#e5e7eb'
        }
      }      
    }
  },
  plugins: [],
}
