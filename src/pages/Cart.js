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
    minHeight: "100vh",
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
  const { cartItem, selectedItems, setSelectedItems, setCartItem } = useContext(
    OrderContext,
  );

  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}orders/view/cart/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        setCartItem(response.data.results);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);

  useEffect(() => {
    setSelectedItems(cartItem ? cartItem.map((data) => data.op_id) : []);
    return () => {};
  }, [cartItem]);

  if (!localStorage.getItem("Token")) {
    return <Redirect to='/login' />;
  }

  return (
    <Grid container direction='column' className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4' style={{ marginBottom: theme.spacing(4) }}>
          Your cart
        </Typography>
      </Grid>
      {cartItem?.length === 0 ? (
        <div
          style={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center",
            height: "100%",
            width: "100%",
          }}>
          <Typography variant='h1' align='center' style={{ opacity: "0.3" }}>
            No Items Found
          </Typography>
        </div>
      ) : null}
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
              stock={data.product.stock_left}
            />
          </Grid>
        );
      })}
      {cartItem.length !== 0 ? (
        <Grid container item>
          <Grid item xs={2} md={1}></Grid>
          <Grid item xs={10} md={11}>
            <Button
              disabled={!Boolean(selectedItems.length)}
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
