import { Typography } from "@material-ui/core";
import { Grid, useTheme } from "@material-ui/core";
import React from "react";
import helpImg from "../assets/helpImg.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Help = () => {
  const theme = useTheme();
  return (
    <Grid container item direction='column'>
      <Grid item>
        <Typography variant='h4'>Contact Us</Typography>
      </Grid>
      <Grid item container justify='center' xs='12'>
        <img src={helpImg} alt='help image' />>
      </Grid>
      <Grid item container justify='center' xs='12'>
        <MailOutlineIcon />

        <Typography variant='h4'>Feel free to reach out to us at</Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        style={{ color: "#40567A", marginTop: theme.spacing(2) }}
        xs='12'>
        <Typography variant='h4'>kalafex@gmail.com</Typography>
      </Grid>
    </Grid>
  );
};

export default Help;
