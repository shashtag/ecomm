import React, { useState } from "react";
import subhead from "../../assets/subhead.png";

import {
  AppBar,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    ...theme.palette.background.gradient,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    minHeight: "32px",
    padding: "0 48px 0 15px",
    position: "relative",

    "&:before": {
      pointerEvents: "none",
      content: `" "`,
      position: "absolute",
      opacity: 0.5,
      top: 0,
      left: 0,
      width: "100%",
      height: "32px",
      display: "block",
      background: `url(${subhead})`,
      backgroundPosition: "center",
      [theme.breakpoints.down("sm")]: {
        background: `transparent`,
      },
    },
    [theme.breakpoints.up("sm")]: {
      height: "32px",
      minHeight: "32px",

      padding: "0  15px",
    },
  },
  close: {
    textDecoration: "underline",
    marginLeft: "20px",
    display: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  cross: {
    position: "absolute",
    right: "8px",
    top: "8px",
    cursor: "pointer",
    display: "block",
    height: "20px",
    width: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bar1: {
    height: "2.5px",
    width: "28px",
    background: theme.palette.secondary.main,
    transform: "rotate(45deg) ",
    position: "absolute",
    right: "0px",
    top: "8px",
  },
  bar2: {
    height: "2.5px",
    width: "28px",
    background: theme.palette.secondary.main,
    transform: "rotate(135deg)",
    position: "absolute",
    right: "0px",
    top: "8px",
  },
}));

const SubHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [close, setClose] = useState(false);

  // const theme = useTheme();
  // console.log(close);

  const handleClose = () => {
    setClose(true);
  };

  return (
    <AppBar
      className={classes.appBar}
      style={{
        marginTop: close ? (sm ? "-32px" : "-32px") : undefined,
        transition: " margin 0.3s",
        fontWeight: "600",
      }}
      position='static'>
      <Typography
        variant='h6'
        color='primary'
        style={{
          fontWeight: "600",
        }}>
        Signup to get exciting offers
      </Typography>
      <Typography
        onClick={handleClose}
        variant='h6'
        color='primary'
        style={{
          fontWeight: "600",
        }}
        className={classes.close}>
        Close
      </Typography>
      <div className={classes.cross} onClick={handleClose}>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
      </div>
    </AppBar>
  );
};

export default SubHeader;
