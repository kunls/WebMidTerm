/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
      "index.html"
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0d286c',
        active:'#625bf6',
        third:'#43476d',
        forth:'#f8f9fd',
        fifth:'#f7fbff',
        end:'#f7f9fe',
      },
      borderWidth:{
        '1': '1px',

      },
      hueRotate:{
        '74':'74deg',
      },
      saturate:{
        '6':'.6'
      },
      backgroundImage:{
        'hero-bg':"url('../src/images/hero-bg.png')",
        'global-bg':"url('../src/images/index-clients-global.png')",
        'footer-bg': "url('../src/images/footer-bg.png')",

      }
    },
  },
  plugins: [],
}
