import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import logoLogin from "../assets/logoLogin.png";

const Logo = () => {
  return (
    <Grid item component={Link} to='/'>
      <img src={logoLogin} alt='kalafax logo' />
    </Grid>
  );
};

export default Logo;
