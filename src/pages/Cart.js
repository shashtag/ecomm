import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { OrderContext } from "../Context/OrderContext";
import { UIContext } from "../Context/UIContext";
import CartItem from "../ui/CartItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(6)}px 3.2%`,
    },
  },
}));

const Cart = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const { setLoading } = useContext(UIContext);
  const { cartItem } = useContext(OrderContext);

  if (!localStorage.getItem("Token")) {
    return <Redirect to='/login' />;
  }
  // selectedItems.current = [];

  return (
    <Grid container direction='column' className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4' style={{ marginBottom: theme.spacing(4) }}>
          Your cart
        </Typography>
      </Grid>
      {cartItem.map((data, i) => {
        return (
          <Grid key={i} container item direction='row'>
            <CartItem
              id={data.op_id}
              name={data.product.name}
              pid={data.pid}
              quantity={data.quantity}
              category={data.product.category}
              img={data.product.display_image}
              price={data.product.kalafex_price}
            />
          </Grid>
        );
      })}
      {cartItem.length !== 0 ? (
        <Grid container item>
          <Grid item xs={2} md={1}></Grid>
          <Grid item xs={10} md={11}>
            <Button
              component={Link}
              to='/selectAddress'
              variant='contained'
              size='large'
              color='secondary'
              type='submit'
              style={{
                ...theme.palette.background.gradient,
                width: "100%",
                marginTop: theme.spacing(1),
                padding: "16px 24px",
              }}>
              <Typography variant='h5'>Proceed to Checkout</Typography>
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Cart;
