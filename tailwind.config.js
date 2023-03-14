/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'themecolor': '#5CE4CA',
        'secoundcolor' : '#989899',
        'languagefont' : '#003D31',
        'language' : '#FFFAA4',
        'logbtn' : '#5ddfc5',
        'pgraph' : '#596966',
        'itembg' : '#FFFAE9',
        'duby' : '#FF7D7D',
        'divaider' : '#DEE6E4'
      },
      fontFamily:{
        'NeueMontreal' : 'Neue Montreal'
      },

     screen:{
      'mubail' : '390px'
     }
      
    },
  },
  plugins: [],
}
