const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  screens: {
    xs: '375px',
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    ...defaultTheme.screens,
  },
  extend: {
    borderRadius: {
      '4xl': '2rem',
    },
  },
  theme: {
    fontFamily: {
      body: ['"Trouble Font"'],
    },
  },
  plugins: [],
}
