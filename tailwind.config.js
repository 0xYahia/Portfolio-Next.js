/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'banner-bg': "url('/images/darkbg.jpg')",
      },
    },
    screens: {
      '3xl': { max: '1920px' },
      // => @media(max-width: 1920px) {...}
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      // => @media(max-width: 1279px) {...}
      lg: { max: '1023px' },
      // => @media(max-width: 1023px) {...}
      md: { max: '767px' },
      // => @media(max-width: 767px) {...}
      sm: { max: '639px' },
      // => @media(max-width: 639px) {...}
      xs: { max: '479px' },
      // => @media(max-width: 479px) {...}
    },
  },
  plugins: [],
};
