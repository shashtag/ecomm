import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 15px",
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(4),
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      padding: "0vh 3.2%",
      paddingBottom: theme.spacing(20),
    },
  },
}));

const ReviewOrder = () => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item>
        <Typography variant='h3'>Review your order</Typography>
      </Grid>
    </Grid>
  );
};

export default ReviewOrder;
