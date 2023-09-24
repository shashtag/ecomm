import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
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
  const { setLoading, usrBaseInfo } = useContext(UIContext);
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
        setOrders({
          count: 2,
          next: null,
          previous: null,
          results: [
            {
              o_id: "df3bae92-0f84-49f1-8194-fa371cfba7e2",
              user: 3,
              being_delivered: true,
              received: false,
              payment: null,
              orderproduct_set: [
                {
                  op_id: "b74c7e8b-24bf-4667-ab51-f0a2d9181737",
                  product: {
                    pid: "88d954eb-e8fb-46c7-abde-acbb7400d3c0",
                    name: "cool gum",
                    artist: {
                      full_name: "admin",
                      is_kalafex_admin: true,
                      is_artist: true,
                      is_customer: false,
                      is_first_login: true,
                      date_of_birth: "2021-04-07",
                      phone_number: "12345",
                      id: 1,
                      email: "admin@admin.com",
                    },
                    display_image:
                      "https://kalafex-media.s3.amazonaws.com/media/products/image_unavailable.png",
                  },
                  quantity: 4,
                  ordered: false,
                  date_created: "2021-05-03T19:51:37.077311+05:30",
                  handed_over: true,
                  user: 3,
                  order: "df3bae92-0f84-49f1-8194-fa371cfba7e2",
                },
              ],
            },
            {
              o_id: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
              user: 2,
              being_delivered: true,
              received: false,
              payment: {
                id: 1,
                razorpay_order_id: "order_Gvh6Jh02wHOBTd",
                razorpay_payment_id: "",
                amount: "100.00",
                timestamp: "2021-04-06T21:32:38.648282+05:30",
                paid_successfully: true,
                user: 2,
                order: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
              },
              orderproduct_set: [
                {
                  op_id: "aa65f289-b4ee-424e-9b86-3c7118a81760",
                  product: {
                    pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
                    name: "Cooler CodeChef Band",
                    artist: {
                      full_name: "Test User",
                      is_kalafex_admin: false,
                      is_artist: true,
                      is_customer: false,
                      is_first_login: false,
                      date_of_birth: "2021-04-07",
                      phone_number: "123",
                      id: 2,
                      email: "hari@gmail.com",
                    },
                    display_image:
                      "https://kalafex-media.s3.amazonaws.com/media/products/45752f8c-4e5b-4fc7-abb1-c993fb6cc235/cc.jpg",
                  },
                  quantity: 3,
                  ordered: true,
                  date_created: "2021-05-03T01:28:49.520851+05:30",
                  handed_over: false,
                  user: 2,
                  order: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
                },
              ],
            },
          ],
        });
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
        setOrders({
          count: 2,
          next: null,
          previous: null,
          results: [
            {
              o_id: "df3bae92-0f84-49f1-8194-fa371cfba7e2",
              user: 3,
              being_delivered: true,
              received: false,
              payment: null,
              orderproduct_set: [
                {
                  op_id: "b74c7e8b-24bf-4667-ab51-f0a2d9181737",
                  product: {
                    pid: "88d954eb-e8fb-46c7-abde-acbb7400d3c0",
                    name: "cool gum",
                    artist: {
                      full_name: "admin",
                      is_kalafex_admin: true,
                      is_artist: true,
                      is_customer: false,
                      is_first_login: true,
                      date_of_birth: "2021-04-07",
                      phone_number: "12345",
                      id: 1,
                      email: "admin@admin.com",
                    },
                    display_image:
                      "https://kalafex-media.s3.amazonaws.com/media/products/image_unavailable.png",
                  },
                  quantity: 4,
                  ordered: false,
                  date_created: "2021-05-03T19:51:37.077311+05:30",
                  handed_over: true,
                  user: 3,
                  order: "df3bae92-0f84-49f1-8194-fa371cfba7e2",
                },
              ],
            },
            {
              o_id: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
              user: 2,
              being_delivered: true,
              received: false,
              payment: {
                id: 1,
                razorpay_order_id: "order_Gvh6Jh02wHOBTd",
                razorpay_payment_id: "",
                amount: "100.00",
                timestamp: "2021-04-06T21:32:38.648282+05:30",
                paid_successfully: true,
                user: 2,
                order: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
              },
              orderproduct_set: [
                {
                  op_id: "aa65f289-b4ee-424e-9b86-3c7118a81760",
                  product: {
                    pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
                    name: "Cooler CodeChef Band",
                    artist: {
                      full_name: "Test User",
                      is_kalafex_admin: false,
                      is_artist: true,
                      is_customer: false,
                      is_first_login: false,
                      date_of_birth: "2021-04-07",
                      phone_number: "123",
                      id: 2,
                      email: "hari@gmail.com",
                    },
                    display_image:
                      "https://kalafex-media.s3.amazonaws.com/media/products/45752f8c-4e5b-4fc7-abb1-c993fb6cc235/cc.jpg",
                  },
                  quantity: 3,
                  ordered: true,
                  date_created: "2021-05-03T01:28:49.520851+05:30",
                  handed_over: false,
                  user: 2,
                  order: "e98c5b5b-2f65-4b3b-8697-47bd10b8f260",
                },
              ],
            },
          ],
        });
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
                  responseType: "arraybuffer",
                  method: "get",
                  url: `${process.env.REACT_APP_URL}orders/download/`,
                  headers: {
                    Authorization: `Token ${localStorage.getItem("Token")}`,
                  },
                };

                axios(config)
                  .then(function (response) {
                    console.log(response);
                    var blob = new Blob([response.data], {
                      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    });
                    const date = new Date();
                    saveAs(blob, `${date}.xlsx`);
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
