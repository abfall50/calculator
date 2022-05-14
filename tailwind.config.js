function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {

      fontSize: {
        "1v": "1vh",
        "2v": "2vh",
        "3v": "3vh",
        "4v": "4vh",
        "5v": "5vh",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },

      textColor: {
        skin: {
          bar: 'var(--color-text-bar)',
          screen: 'var(--color-text-screen)',
          num: 'var(--color-text-num-ope)',
          equals: 'var(--color-text-equals)',
          other: 'var(--color-text-other)',
        }
      },

      backgroundColor: {
        skin: {
          main: 'var(--color-main)',
          toggle: 'var(--color-toggle)',
          keypad: 'var(--color-keypad)',
          screen: 'var(--color-screen)',
          'button-one': 'var(--color-button-one)',
          'button-two': 'var(--color-button-two)',
          'button-three': 'var(--color-button-three)',
          'key1-shadow': 'var(--color-key1-shadow)',
          'key2-shadow': 'var(--color-key2-shadow)',
          'key3-shadow': 'var(--color-key3-shadow)',
        }, 
      },

      boxShadow: {
          'sh1': '0 5px 0 0 var(--color-key1-shadow)',
          'sh2': '0 5px 0 0 var(--color-key2-shadow)',
          'sh3': '0 5px 0 0 var(--color-key3-shadow)',
      },
    },
  },
  plugins: [],
}
