import { Button, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(6)}px 3.2%`,
    },
  },
}));

const SuccessOrder = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      style={{ minHeight: "50vh", display: "grid", placeItems: "center" }}
      className={classes.root}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src='https://kalafex-images.s3.ap-south-1.amazonaws.com/Utils/successfulOrder.png'
          alt='success tick'
          style={{ marginRight: theme.spacing(4) }}></img>
        <Typography variant='h3' style={{ color: "#6FCF97" }}>
          Your order has been placed successfully
        </Typography>
      </div>
      <Typography
        component='div'
        variant='h5'
        style={{ margin: "0 25vw", display: "inline-block" }}
        align='center'>
        Your order is placed. Get more details in my orders and track your
        orders.
      </Typography>
      <Button
        // onClick={handleCreateOrder}
        component={Link}
        to='/user/trackOrder'
        variant='contained'
        size='large'
        color='secondary'
        type='submit'
        style={{
          // width: "100%",
          background: theme.palette.secondary.light,
          marginTop: theme.spacing(1),
          padding: "16px 24px",
        }}>
        <Typography variant='h5'>My orders</Typography>
      </Button>
    </div>
  );
};

export default SuccessOrder;
