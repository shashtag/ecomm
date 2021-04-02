import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const darkBlue = "#152238",
  black = "#0a0a0a",
  white = "#FFF";

let theme = createMuiTheme({
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
    text: {
      primary: "#152238",
      secondary: "#262626",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Lato",
    body2: {
      fontSize: "0.5rem",
      fontWeight: "400",
      lineHeight: 1.25,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: "600",
      lineHeight: 1.25,
    },
    h1: {
      fontFamily: "Josefin Sans",
      fontSize: "4.5rem",
      fontWeight: "bold",
      lineHeight: "1",
    },

    h2: {
      fontSize: "3rem",
      fontWeight: "300",

      lineHeight: "1.25",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "400",
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1.50",
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: "400",

      lineHeight: "1.25",
    },
    button: {
      textTransform: "none",
    },
    subtitle2: {
      lineHeight: "1.25",
      fontSize: "0.75rem",
      fontWeight: "400",
    },
    subtitle1: {
      lineHeight: "1.25",
      fontSize: "0.625rem",
      fontWeight: "400",
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
theme = responsiveFontSizes(theme);

const {
  breakpoints,
  typography: { pxToRem },
} = theme;

theme = {
  ...theme,
  overrides: {
    MuiTypography: {
      h1: {
        [breakpoints.down("xs")]: {
          fontSize: "3.5rem",
        },
      },
    },
  },
};

console.log(theme);

export default theme;
