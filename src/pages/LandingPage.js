import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Hero from "../components/Landing/Hero";
import Usp from "../components/Landing/Usp";
import PaysArtist from "../components/Landing/PaysArtist";
import Trending from "../components/Landing/Trending";
import { UIContext } from "../Context/UIContext";
import { Redirect } from "react-router";

const LandingPage = () => {
  const { usrBaseInfo, token } = useContext(UIContext);

  if (!usrBaseInfo && token) {
    return <div style={{ height: "80vh" }}></div>;
  }

  if (usrBaseInfo?.is_kalafex_admin) {
    return <Redirect to='/admin' />;
  }
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
