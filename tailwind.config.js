module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "700px",
        xl: "750px"
      }
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      textDecorationThickness: {
        1: '1.5px',
      },
        colors: {
          neutral: {
            950: '#0a0a0a',
          },
        }
    },
  },
  plugins: [
    'postcss-import',
    require('@tailwindcss/typography'),
  ],
}