module.exports = {
  // purge: {
  //  content: ['_site/**/*.html'],
  //   options: {
  //     safelist: [],
  //   },
  // },
  theme: {
    extend: {
      colors: {
        change: "black",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        shadow: "shadow",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      translate: ["group-hover"],
      borderColor: ["group-hover"],
      height: ["responsive", "hover", "focus"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
