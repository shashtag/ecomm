import { createMuiTheme } from "@material-ui/core/styles";

const darkBlue = "#152238",
  black = "#0a0a0a",
  white = "#FFF";

const theme = createMuiTheme({
  palette: {
    background: {
      gradient: {
        background: "linear-gradient(90.04deg, #FFB800 0%, #FF4185 99.67%)",
      },
    },
    common: {
      black: black,
      darkBlue: darkBlue,
      white: white,
    },
    primary: {
      main: white,
    },
    secondary: {
      main: darkBlue,
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Lato",
    h1: {
      fontFamily: "Josefin Sans",
      fontSize: "4.5rem",
      fontWeight: "bold",
      lineHeight: "4.5rem",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "300",

      lineHeight: "3.625rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "120%",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "600",
      lineHeight: "120%",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "300",
      lineHeight: "150%",
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: "400",

      lineHeight: "125%",
    },
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 6,
  },
});
console.log(theme);

export default theme;
