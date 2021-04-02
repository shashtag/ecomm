import { Typography, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

const TopListing = () => {
  const theme = useTheme();
  return (
    <Grid item container md={6}>
      <Grid item md={5}>
        <img src={"ss"} alt='sss' />
      </Grid>
      <Grid item md={6}>
        <Typography
          variant='caption'
          style={{ marginBottom: theme.spacing(0.5) }}>
          ddds
        </Typography>
        <Typography
          variant='subtitle2'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TopListing;
