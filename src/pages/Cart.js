import { Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { UIContext } from "../Context/UIContext";
import CartItem from "../ui/CartItem";

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
  const [cartItem, setCartItem] = useState([]);
  const { setLoading } = useContext(UIContext);

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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);

  if (!localStorage.getItem("Token")) {
    return <Redirect to='/login' />;
  }
  if (cartItem.length === 0) {
    return <div>ghgh</div>;
  }

  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item xs={12}>
        <Typography variant='h4'>Your cart</Typography>
      </Grid>
      {cartItem?.map((data) => (
        <CartItem />
      ))}
    </Grid>
  );
};

export default Cart;
