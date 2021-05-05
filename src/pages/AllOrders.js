import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import OrderItem from "../components/OrderItem";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px 15px`,
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(6)}px 3.2%`,
    },
  },
}));

const AllOrders = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const [orders, setOrders] = useState(false);
  const { setLoading } = useContext(UIContext);

  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}${
        props.artist
          ? "orders/view/orderproducts/artist/"
          : "orders/view/orders/"
      }`,
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        setOrders(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);

  console.log(orders);
  console.log(
    orders?.results?.filter((data) => {
      return data?.payment?.paid_successfully;
    }),
  );
  return (
    <Grid container className={classes.root} direction='column'>
      <Grid item>
        <Typography variant='h3' style={{ marginBottom: theme.spacing(3) }}>
          {" "}
          Your Orders
        </Typography>
      </Grid>
      <Grid container item>
        {orders?.results
          ?.filter((data) => {
            return data?.payment?.paid_successfully;
          })
          .map((data, i) => (
            <OrderItem
              key={i}
              id={data.o_id}
              beingDelivered={data.being_delivered}
              orderedDate={data.ordered_date}
              price={data.payment.amount}
              refundRequested={data.payment.refund_requested}
              refundGranted={data.payment.refund_granted}
              prods={data.orderproduct_set}
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default AllOrders;
