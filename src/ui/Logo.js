import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Logo = () => {
  return (
    <Grid item component={Link} to='/'>
      <img
        src='https://kalafex-images.s3.ap-south-1.amazonaws.com/Auth+Imgs/logoLogin.png'
        alt='kalafax logo'
      />
    </Grid>
  );
};

export default Logo;
