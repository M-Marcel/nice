/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#6E7191',
        'black': {
          100: '#d7d7d7',
          200: '#000000',
          300: '#202224',
          400: '#6E7191',
          500: '#1A1C1F',
        },
        'gray': {
          100: '#D9DBE9',
          200: '#43424D',
          300: '#848895',
          400: '#8C8E9E',
          500: '#838594',
          600: '#D9DBE9',
          700: '#FCFCFC',
          800: '#43424D',
          900: '#EFF0F6',
          910: '#F7F7FC',


        },
        'blue': {
          100: '#039dea',
          200: '#34A9F14D',
          300: '#eef8fe',
          400: '#30A6EF',

        },
      },
      fontFamily: {
        title: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(180deg, #1E7FF5 0%, #025ECF 100%)',
      },
      borderColor: {
        'button-border': '#FFFFFF26',
      },
      boxShadow: {
        'shadow-1': '0px 4px 7px 0px #2C8DC933',
        'shadow-2': '0px 0px 0px 1.5px #025ECF',
      },
    }
  },
  plugins: [],
}

