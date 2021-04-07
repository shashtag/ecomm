import { Typography, useTheme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import TopListing from "./TopListing";

const TopListings = () => {
  const theme = useTheme();
  return (
    <Grid container style={{ marginTop: theme.spacing(3) }}>
      <Paper square style={{ width: "100%", padding: theme.spacing(4) }}>
        <Grid container>
          <Grid item xs={12} style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='h6' color='secondary'>
              Your top listings
            </Typography>
          </Grid>
          {[{ nama: "s" }, { nama: "st" }, { nama: "ss" }, { nama: "se" }].map(
            (data) => (
              <TopListing key={data.nama} />
            ),
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TopListings;
