/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '375px',
        md: '744px',
        lg: '1024px',
        xl: '1440px',
      },
      fontSize: {
        lg: ['24px', '32px'],
        md: ['20px', '32px'],
        base: ['18px', '24px'],
        sm: ['18px', '24px'],
        xs: ['16px', '24px'],
        xxs: ['14px', '20px'],
      },
      colors: {
        primary: {
          100: '#f3f3fc',
          200: '#d7d4f0',
          300: '#bfbcdf',
          400: '#9995c5',
          500: '#6f6aa8',
          600: '#464086',
          700: '#292466',
          800: '#130f40',
        },
        secondary: {
          100: '#f8f8ff',
          200: '#eaeafa',
          300: '#d7d4f0',
          400: '#b8bae2',
          500: '#8f91c4',
          600: '#5b5fa0',
          700: '#4c5091',
          800: '#3d4180',
          900: '#30336b',
        },
        tertiary: {
          100: '#555555',
          200: '#454544',
          300: '#373736',
          400: '#262625',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e0e0e0',
          300: '#cdcdcd',
          400: '#b8b8b8',
          500: '#a6a6a6',
          600: '#909090',
          700: '#808080',
        },
      }
    },
  },
  plugins: [],
}

