import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(4)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(4)}px 3.2%`,
    },
  },
}));

const Cart = () => {
  const classes = useStyles();
  if (!localStorage.getItem("Token")) {
    return <Redirect to='/login' />;
  }
  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item xs={12}>
        <Typography variant='h4'>Your cart</Typography>
      </Grid>
    </Grid>
  );
};

export default Cart;
