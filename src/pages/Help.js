import { Typography } from "@material-ui/core";
import { Grid, useTheme } from "@material-ui/core";
import React from "react";
import helpImg from "../assets/helpImg.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Help = (props) => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
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
      <Grid xs={12} item>
        <Typography
          variant={props.standalone ? "h2" : "h4"}
          style={props.standalone ? { fontWeight: "bold" } : null}>
          Contact Us
        </Typography>
      </Grid>
      <Grid item container justify='center' xs='12'>
        <img src={helpImg} alt='contact us' />
      </Grid>
      <Grid
        item
        container
        justify='center'
        xs='12'
        // style={{ marginBottom: theme.spacing(1) }}
      >
        <Grid item container xs={12} justify='center'>
          <MailOutlineIcon style={{ marginRight: theme.spacing(1) }} />

          <Typography variant='h4'>Feel free to reach out to us at</Typography>
        </Grid>
        <Grid
          container
          item
          justify='center'
          style={{ color: "#40567A" }}
          xs='12'>
          <Typography
            component='a'
            href='mailto:support@kalafex.com'
            variant='h4'>
            support@kalafex.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Help;
