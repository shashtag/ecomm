import { Typography, useTheme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { ADashboardContext } from "../../Context/ADashboardContext";
import TopListing from "./TopListing";

const TopListings = () => {
  const theme = useTheme();
  const { topListings } = useContext(ADashboardContext);
  console.log(topListings);
  return (
    <Grid container style={{ marginTop: theme.spacing(3) }}>
      <Paper square style={{ width: "100%", padding: theme.spacing(2) }}>
        <Grid container direction='column'>
          <Grid
            container
            item
            xs={12}
            style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='h6' color='secondary'>
              Your listings
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            {topListings?.results?.map((data, i) => {
              return (
                <TopListing
                  pid={data?.pid}
                  img={data?.display_image}
                  category={data.category}
                  name={data.name}
                  key={i}
                />
              );
            })}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TopListings;
