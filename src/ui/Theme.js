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
      light: "#40567A",
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
    h3: {
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: "150%",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "120%",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "400",
      lineHeight: "120%",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "500",
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
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: darkBlue,
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: white,
      },
      toolbarBtnSelected: { color: white },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        color: darkBlue,
      },
    },
    MuiPickersDay: {
      day: {
        color: "#40567A",
      },
      daySelected: {
        backgroundColor: "#E1E1E1",
        "&:hover": {
          backgroundColor: "#D1D1D1",
        },
      },
      dayDisabled: {
        color: "#849ABE",
      },
      current: {
        color: "#40567A",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: "red",
      },
    },
    MuiPickersYear: {
      yearSelected: {
        color: darkBlue,
      },
    },
  },
});
console.log(theme);

export default theme;
