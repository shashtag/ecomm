import React from "react";
import { Grid } from "@material-ui/core";
import Hero from "../components/Landing/Hero";
import Featured from "../components/Landing/Featured";
import Usp from "../components/Landing/Usp";
import PaysArtist from "../components/Landing/PaysArtist";
import Footer from "../components/Footer";

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
      <Grid item>
        <Featured />
      </Grid>

      <Grid item>
        <PaysArtist />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
