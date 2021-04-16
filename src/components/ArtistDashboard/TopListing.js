import { Paper, Typography, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

const TopListing = (props) => {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      xs={6}
      md={6}
      spacing={2}
      style={{ paddingTop: theme.spacing(1) }}>
      <Grid item xs={6}>
        <Paper
          elevation={0}
          square
          style={{
            aspectRatio: "3/4",
            width: "100%",
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
