module.exports = {
  darkTheme:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      '4sm':{'max':'375px'},
      '3sm':{'max':'500px'},
      '2sm':{'max':'520px'},
      'sm':{'max':'599px'},
      'md':{'max':'768px'},
      'lg':{'max':'900px'},
      'xl':{'max':'999px'},
      '2xl':{'max':'1100px'},
      '3xl':{'max':'1130px'},
      '4xl':{'max':'1299px'},
      '5xl':{'max':'1365px'}
    },
    extend: {},
  },
  plugins: [],
}