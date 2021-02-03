import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  // useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  login: {
    // background: `url(${uspBg}) no-repeat `,
    // backgroundSize: "cover",
    // marginTop: theme.spacing(10),
    // padding: " 0 4%",
    minHeight: "100vh",
    left: {
      background: `url(${loginBg}) no-repeat `,
      backgroundSize: "cover",

    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.login}>
      <Grid item></Grid>
      <Grid item className={classes.left}></Grid>
    </Grid>
  );
};

export default Login;
