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

      colors: {

        theme1: {
          bg_main: "#3A4764",
          bg_toggle: "#232C43",
          bg_keypad: "#232C43",
          bg_screen: "#182034",
          key1: "#637097",
          key2: "#D03F2F",
          toggle: "#D03F2F",
          key3: "#EAE3DC",
          key1_sh: "#404E72",
          key2_sh: "#93261A",
          key3_sh: "#B4A597",
          bar_txt: "#FFFFFF",
          screen_txt: "#FFFFFF",
          num_ope_txt: "#444B5A",
          equals_txt: "#FFFFFF",
          other_txt: "#FFFFFF"
        },

        theme2: {
          bg_main: "#E6E6E6",
          bg_toggle: "#D1CCCC",
          bg_keypad: "#D1CCCC",
          bg_screen: "#EDEDED",
          key1: "#377F86",
          key2: "#CA5502",
          toggle: "#CA5502",
          key3: "#E5E4E1",
          key1_sh: "#1B5F65",
          key2_sh: "#893901",
          key3_sh: "#A69D91",
          bar_txt: "#35352C",
          screen_txt: "#35352C",
          num_ope_txt: "#35352C",
          equals_txt: "#FFFFFF",
          other_txt: "#FFFFFF",
        },

        theme3: {
          bg_main: "#160628",
          bg_toggle: "#1D0934",
          bg_keypad: "#1D0934",
          bg_screen: "#1D0934",
          key1: "#58077D",
          key2: "#00E0D1",
          toggle: "#00E0D1",
          key3: "#341C4F",
          key1_sh: "#BC15F4",
          key2_sh: "#6CF9F2",
          key3_sh: "#871C9C",
          bar_txt: "#FFE53D",
          screen_txt: "#FFE53D",
          num_ope_txt: "#FFE53D",
          equals_txt: "#1B2428",
          other_txt: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
}
