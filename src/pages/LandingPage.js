import React from "react";
import { Grid } from "@material-ui/core";
import Hero from "../components/Landing/Hero";
import Usp from "../components/Landing/Usp";
import PaysArtist from "../components/Landing/PaysArtist";
import Trending from "../components/Landing/Trending";

const LandingPage = () => {
  return (
    <Grid
      container
      direction='column'
      // className={classes.mainContainer}
    >
      <Grid item container>
        <Hero />
      </Grid>
      <Grid item container>
        <Usp />
      </Grid>
      <Grid item container>
        <Trending />
      </Grid>
      {/* <Grid item container>
        <Featured />
      </Grid> */}

      <Grid item>
        <PaysArtist />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
