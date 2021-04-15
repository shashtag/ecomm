import { Typography } from "@material-ui/core";
import { Grid, useTheme } from "@material-ui/core";
import React from "react";
import helpImg from "../assets/helpImg.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { PinDropSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Help = (props) => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      direction='column'
      style={
        props.standalone
          ? {
              padding: "0 15px",
              paddingTop: theme.spacing(4),

              paddingBottom: theme.spacing(20),
              [theme.breakpoints.up("md")]: {
                padding: "0vh 3.2%",
                paddingBottom: theme.spacing(20),
                paddingTop: theme.spacing(10),
              },
            }
          : null
      }>
      <Grid item>
        <Typography
          variant={props.standalone ? "h2" : "h4"}
          style={props.standalone ? { fontWeight: "bold" } : null}>
          Contact Us
        </Typography>
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
        <Typography
          component='a'
          href='mailto:support@kalafex.com'
          variant='h4'>
          support@kalafex.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Help;
