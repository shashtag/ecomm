import { Paper, Typography, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

const TopListing = (props) => {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      xs={12}
      md={6}
      style={{ paddingTop: theme.spacing(1) }}>
      <Grid item md={5}>
        <Paper
          elevation={0}
          square
          style={{
            height: "120px",
            width: "90px",
            marginBottom: theme.spacing(1),
            background: `#ffffff url("${props.img}")  no-repeat  center center `,
            backgroundSize: "contain",
          }}></Paper>
      </Grid>
      <Grid item md={6}>
        <Typography
          variant='caption'
          component='div'
          noWrap
          style={{
            marginBottom: theme.spacing(0.5),
          }}>
          {props.name}
        </Typography>
        <Typography
          variant='subtitle2'
          style={{ marginBottom: theme.spacing(1) }}>
          {props.category}
        </Typography>
        {/* <Typography
          variant='subtitle1'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default TopListing;
