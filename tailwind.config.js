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
         lg: "600px",
         xl: "700px"
      }
    },
    extend: {},
  },
  plugins: [
    'postcss-import',
  ],
  darkMode: 'class',
}