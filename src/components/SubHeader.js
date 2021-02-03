import React, { useState } from "react";
import subhead from "../assets/subhead.png";

import { AppBar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    ...theme.palette.background.gradient,

    flexDirection: "row",
    height: "32px",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    padding: "0 15px",

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
    },
  },
  close: {
    textDecoration: "underline",
    marginLeft: "20px",
    display: "inline-block",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const SubHeader = () => {
  const classes = useStyles();
  const [close, setClose] = useState(false);
  // const theme = useTheme();
  console.log(close);

  const handleClose = () => {
    setClose(true);
  };

  return (
    <AppBar
      className={classes.appBar}
      style={{
        marginTop: close ? "-32px" : undefined,
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
        Signup now and get 10% off on your first five orders
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
    </AppBar>
  );
};

export default SubHeader;
