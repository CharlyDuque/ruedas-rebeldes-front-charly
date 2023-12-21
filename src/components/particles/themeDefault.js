const globalVars = {
  roboto: `"Roboto", sans-serif`,
  remBaseline: "16px",
  // Font weights
  fontThin: 100,
  fontExtraLight: 200, // Extra Light, Ultra Light
  fontLight: 300,
  fontRegular: 400, // Normal, Book, Regular
  fontMedium: 500,
  fontSemiBold: 600, // Semi Bold, Demi Bold
  fontBold: 700,
  fontExtraBold: 800, // Extra Bold, Ultra Bold
  fontBlack: 900, // Black, Heavy
  // Colors
  white: "#ffffff",
  alabaster: "#fafafa",
  concrete: "#f2f2f2",
  alto: "#e6e6e6",
  cararra: "#f0f0e9",
  gallery: "#ededed",
  mercury: "#e5e5e5",
  silver: "#cccccc",
  dustyGray: "#999999",
  doveGray: "#666666",
  gray: "#808080",
  mineShaft: "#333333",
  black: "#000000",
  saffron: "#f3b43f",
  goldenTainoi: "#ffc859",
  persianRed: "#cc3333",
  outerSpace: "#2d3538",
  mountainMeadow: "#25d366",
  wafer: "#DFCDC3",
  wildSand: "#F6F6F6",
  redOrange: "#FF3838",
  candlelight: "#FFD724",
  brightGreen: "#55D700",
  coralRed: "#FF3B3B",
}

const themeDefault = {
  themeName: "Default Theme",
  // Font
  font: globalVars.roboto,
  palette: {
    // BG Color
    bgColor: globalVars.wildSand,
    textColor: globalVars.mineShaft,
    // Colours
    primary: globalVars.gallery,
  },
  vars: globalVars,
  awesomegrid: {
    mediaQuery: "only screen",
    columns: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 12,
      xl: 12,
    },
    gutterWidth: {
      xs: 1,
      sm: 1.5,
      md: 1.5,
      lg: 1.5,
      xl: 1.5,
    },
    paddingWidth: {
      xs: 1,
      sm: 1.5,
      md: 1.5,
      lg: 1.5,
      xl: 1.5,
    },
    container: {
      xs: "full", // 'full' = max-width: 100%
      sm: "full", // 'full' = max-width: 100%
      md: "full", // 'full' = max-width: 100%
      lg: "full", // 'full' = max-width: 100%
      xl: "full", // 'full' = max-width: 100%
      // xl: 120, // max-width: 1920px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 64, // 1024px
      lg: 85, // 1360px
      xl: 120, // 1920px
    },
  },
}

module.exports = themeDefault
