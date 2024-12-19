/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'theme-yellow': '#ffc727',
        'theme-yellow-dark': '##e6b323',
        'theme-dark': '#37474f',
      },
      height: {
        'screen-75': "90vh",
        'screen-50': "50vh",
      },
      fontFamily: {
        'main': ['"Open Sans']
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
}

