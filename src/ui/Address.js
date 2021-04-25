import { Grid, Typography, useTheme } from "@material-ui/core";
import React from "react";

const Address = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "300px",
        border: "dashed #40567A 1px",
        padding: theme.spacing(4),
        width: "100%",
        boxSizing: "border-box",
      }}>
      <Grid container direction='column'>
        <Grid item>
          <Typography variant='h3'>props.name</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>props.name</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>props.name</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>props.name</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>props.name</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Address;
