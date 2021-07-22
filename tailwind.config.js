module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    extend: {
      fontFamily: {
        Open: ['Open', 'sans-serif'],
        Anton: ['Anton', 'sans-serif'],
      },
      colors: {
        darkBlue: '#0747B5',
        button: '#3C73D2',
      },
      boxShadow: {
        buttonShadow: '5px 5px 10px rgba(0, 0, 0, 0.20)',
      },
    },
    minWidth: {
      40: '10rem',
      60: '15rem',
      80: '20rem',
      100: '25rem',
    },
    maxWidth: {
      120: '30rem',
      160: '40rem',
      200: '50rem',
    },
  },
  variants: {},
  plugins: [],
}
