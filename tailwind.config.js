module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    
    rotate:{
      '60':'60deg',
    }
  },
  variants: {
    extend: {
      opacity: [`disabled`],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
