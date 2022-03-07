const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '5px',
      },
      boxShadow: {
      },
      zIndex: {
        100: 100,
        200: 200,
      },
    },
    colors: {
      grey: {
        800: '#1A1D26',
        500: '#232731',
        // text-dark
        300: '#7A7E8B',
        // text
        200: '#989FB7',
      },
      blue: '#4489ED',
      light: '#F9FAFF',
      white: '#FFFFFF',

      orange: '#E85434',

      red: '#FC254D',
      green: '#4FD1C5',
      transparent: 'transparent',
    },
    fontFamily: {
      main: 'Saira',
      second: 'Russo One'
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const utilities = [
        {
          '.flex-center': {
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
          },
        },
        {
          '.flex-y-center': {
            display: 'flex',
            'align-items': 'center',
          },
        },
        {
          '.flex-x-center': {
            display: 'flex',
            'justify-content': 'center',
          },
        },
      ]
      addUtilities(utilities)
    }),
  ],
}
