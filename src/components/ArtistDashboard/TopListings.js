import { Typography, useTheme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { ADashboardContext } from "../../Context/ADashboardContext";
import TopListing from "./TopListing";

const TopListings = () => {
  const theme = useTheme();
  const { topListings } = useContext(ADashboardContext);
  return (
    <Grid container style={{ marginTop: theme.spacing(3) }}>
      <Paper square style={{ width: "100%", padding: theme.spacing(4) }}>
        <Grid container direction='column'>
          <Grid
            container
            item
            xs={12}
            style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='h6' color='secondary'>
              Your top listings
            </Typography>
          </Grid>
          <Grid item container spacing={3}>
            {topListings?.results?.map((data, i) => {
              if (i > 3) {
                return <></>;
              }
              return (
                <TopListing
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
