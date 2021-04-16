import { Grid, Typography } from "@material-ui/core";
import React from "react";
import construction from "../assets/construction.png";
const UnderConstruction = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Grid container direction='column' spacing={6}>
          <Grid item container justify='center'>
            <img
              max-width='100%'
              width='500px'
              height='auto'
              src={construction}
              alt='construction img'></img>
          </Grid>
          <Grid item>
            <Typography variant='h1'>Page Under Construction</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UnderConstruction;
