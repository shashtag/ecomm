import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import OrderItem from "../ui/OrderItem";
import { UIContext } from "../Context/UIContext";
import { Pagination } from "@material-ui/lab";
import { saveAs } from "file-saver";

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
  const { page } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [orders, setOrders] = useState(false);
  const { setLoading, usrBaseInfo, token } = useContext(UIContext);
  const [pagination, setPagination] = useState(page ? Number(page) : 1);

  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}${
        props.admin
          ? pagination === 1
            ? "orders/view/orders/pending/"
            : `orders/view/orders/pending/?page=${pagination}`
          : pagination === 1
          ? "orders/view/previous_orders/"
          : `orders/view/previous_orders/?page=${pagination}`
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
        setLoading(false);
        // console.log(error);
      });

    return () => {};
  }, [pagination]);

  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}${
        props.admin
          ? pagination === 1
            ? "orders/view/orders/pending/"
            : `orders/view/orders/pending/?page=${pagination}`
          : pagination === 1
          ? "orders/view/previous_orders/"
          : `orders/view/previous_orders/?page=${pagination}`
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
        setLoading(false);
        // console.log(error);
      });
    return () => {};
  }, []);

  // console.log(orders);
  // console.log(
  //   orders?.results?.filter((data) => {
  //     return data?.payment?.paid_successfully;
  //   }),
  // );
  // if (!token) {
  //   return <Redirect to='/' />;
  // }

  // if (!usrBaseInfo?.is_kalafex_admin && token) {
  //   return <Redirect to='/' />;
  // }

  const handlePageChange = (event, value) => {
    setPagination(value);

    if (value !== 1) {
      history.push(`/admin/orders/${value}`);
    } else {
      history.push(`/admin/orders`);
    }
  };

  return (
    <Grid container className={classes.root} direction='column'>
      <Grid item container alignItems='center'>
        <Grid item>
          <Typography variant='h3' style={{ margin: theme.spacing(3, 0) }}>
            {" "}
            {usrBaseInfo?.is_kalafex_admin ? "All" : "Your"} Orders
          </Typography>
        </Grid>
        <div style={{ flexGrow: "1" }}></div>
        {usrBaseInfo?.is_kalafex_admin ? (
          <Grid item>
            <Button
              // startIcon={<AddBoxIcon />}
              variant='contained'
              size='small'
              color='secondary'
              type='submit'
              style={{
                padding: theme.spacing(1, 5),
              }}
              onClick={() => {
                var config = {
                  method: "get",
                  url: `${process.env.REACT_APP_URL}orders/download/`,
                  headers: {
                    Authorization: `Token ${localStorage.getItem("Token")}`,
                  },
                };

                axios(config)
                  .then(function (response) {
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}>
              <Typography variant='h5'>Todays Orders </Typography>
            </Button>
          </Grid>
        ) : null}
      </Grid>
      <Grid container item>
        {orders?.results?.length !== 0 && orders?.results ? (
          orders?.results
            ?.filter((data) => {
              return (
                data?.payment?.paid_successfully &&
                data?.orderproduct_set.length !== 0
              );
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
            ))
        ) : (
          <div
            style={{
              minHeight: "50vh",
              display: "grid",
              placeItems: "center",
              height: "100%",
              width: "100%",
            }}>
            <Typography variant='h1' align='center' style={{ opacity: "0.3" }}>
              No Orders Found
            </Typography>
          </div>
        )}
      </Grid>
      <Grid container item xs={12} justify='center'>
        <Pagination
          style={{ marginTop: theme.spacing(4) }}
          size='large'
          count={orders?.total_pages}
          page={Number(pagination)}
          onChange={handlePageChange}
          variant='outlined'
          shape='rounded'
        />
      </Grid>
    </Grid>
  );
};

export default AllOrders;
