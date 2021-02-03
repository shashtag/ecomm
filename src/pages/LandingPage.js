import React from "react";
import {
  Grid,
  makeStyles,
  // Button,
  Typography,
  useTheme,
  // useMediaQuery,
  // Card,
  // CardContent,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Usp from "../components/Usp";

const LandingPage = () => {
  return (
    <Grid
      container
      direction='column'
      // className={classes.mainContainer}
    >
      <Grid item>
        <Hero />
      </Grid>
      <Grid item>
        <Usp />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
