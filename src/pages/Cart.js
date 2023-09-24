import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
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
  // const history = useHistory();
  const { setLoading } = useContext(UIContext);
  const { cartItem, selectedItems, setSelectedItems, setCartItem } =
    useContext(OrderContext);

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
        setLoading(false);
        setCartItem([
          {
            op_id: "eef49ec7-77bd-4e7f-9733-b7118fb4bf0e",
            product: {
              pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
              name: "Cool CodeChef Band",
              artist: 1,
              description: "It is what it is",
              category: "accessories",
              subcategory: "bands",
              original_price: "500.00",
              kalafex_price: "525.00",
              display_image:
                "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              discount_price: null,
              stock_left: 5,
            },
            quantity: 2,
            ordered: false,
            date_created: "2021-04-25T17:06:54.365737Z",
            user: 2,
            order: null,
          },
          {
            op_id: "438d80ad-a529-4bb4-a89f-260754ae84a5",
            product: {
              pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
              name: "Cool CodeChef Band",
              artist: 1,
              description: "It is what it is",
              category: "accessories",
              subcategory: "bands",
              original_price: "500.00",
              kalafex_price: "525.00",
              display_image:
                "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              discount_price: null,
              stock_left: 5,
            },
            quantity: 2,
            ordered: false,
            date_created: "2021-04-25T17:06:52.659730Z",
            user: 2,
            order: null,
          },
          {
            op_id: "b532465b-a4a2-4b3d-a0c4-bd9eac9e6ffc",
            product: {
              pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
              name: "Cool CodeChef Band",
              artist: 1,
              description: "It is what it is",
              category: "accessories",
              subcategory: "bands",
              original_price: "500.00",
              kalafex_price: "525.00",
              display_image:
                "https://plus.unsplash.com/premium_photo-1664811569206-83cc64fdb676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              discount_price: null,
              stock_left: 5,
            },
            quantity: 2,
            ordered: false,
            date_created: "2021-04-03T13:31:40.822395Z",
            user: 2,
            order: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
          },
        ]);
        // console.log(error);
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
      <Grid container item direction='row'>
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
            <CartItem
              key={i}
              id={data.op_id}
              name={data.product.name}
              pid={data.pid}
              quantity={data.quantity}
              category={data.product.category}
              img={data.product.display_image}
              price={data.product.kalafex_price}
              stock={data.product.stock_left}
            />
          );
        })}
      </Grid>
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
