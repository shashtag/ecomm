import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Trending = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Trending;
