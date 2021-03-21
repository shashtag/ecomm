import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
} from "@material-ui/core";

const ProductDesc = () => {
  return (
    <Grid container>
      <Grid item md={4}></Grid>
      <Grid item md={8}></Grid>
    </Grid>
  );
};

export default ProductDesc;
