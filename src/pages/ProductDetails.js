import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  useTheme,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { UIContext } from "../Context/UIContext";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Carousel from "react-material-ui-carousel";
import { AddToCart } from "../API/Post";
// import { APContext } from "../Context/APContext";
import ReviewSection from "../components/ReviewSection";
import UserReviewSection from "../components/UserReviewSection";
import OtherReviewSection from "../components/OtherReviewSection";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    marginBottom: "80px",
    [theme.breakpoints.up("md")]: {
      padding: "0px 3.2%",
    },
  },
  smBanner: {
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    filter: "drop-shadow(2px 7px 25px rgba(58, 58, 58, 0.1))",
  },
}));

const ProductDetails = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { pid } = useParams();
  const { setLoading, setSnackbar, token } = useContext(UIContext);

  const [productDetails, setProductDetails] = useState(null);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}store/view/product/${pid}`,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setProductDetails(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // console.log(error);
      });

    return () => {};
  }, []);

  const imgs = [productDetails?.display_image];
  for (let i = 0; i < productDetails?.image_list.length; i++) {
    imgs.push(productDetails?.image_list?.[i].image);
  }

  if (!productDetails) {
    return <div style={{ height: "100vh" }}></div>;
  }
  // console.log(productDetails);
  return (
    <>
      <Grid
        container
        item
        style={{
          backgroundColor: "#F4F4F4",
        }}
        className={classes.root}>
        <Typography
          variant='h6'
          style={{
            padding: theme.spacing(0.5, 0),
          }}>
          Home {"> "}
          {productDetails?.category}
        </Typography>
      </Grid>
      <Grid container className={classes.root} spacing={5}>
        <Grid container item sm={4}>
          <Grid item xs={12}>
            <Carousel animation='slide' className={classes.carousel}>
              {imgs.map((img, i) => (
                <Paper
                  key={i}
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",

                    background: `#ffffff url("${img}")  no-repeat  center center `,
                    backgroundSize: "contain",
                  }}>
                  <Paper
                    style={{
                      width: "100%",
                      paddingTop: "133.333333%",
                      position: "relative",
                    }}>
                    <Paper
                      style={{
                        aspectRatio: "3/4",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        backgroundSize: "cover",

                        background: `#ffffff url("${img}")  no-repeat  center center / cover `,
                        // height: "70%",
                      }}></Paper>
                    {/* <CardMedia
            component='img'
            loading='lazy'
            height='auto'
            width='auto'
            className={classes.media}
            image={props?.img}
            // title='Paella dish'
          /> */}
                  </Paper>
                </Paper>
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid container sm={8} item direction='column'>
          <Grid container direction='row' item>
            <IconButton
              style={{
                padding: "0",
                height: "60px",
                width: "60px",
                marginRight: theme.spacing(1),
              }}
              onClick={() => {
                history.push(`/artist/${productDetails?.artist?.custom_url}`);
              }}>
              <Avatar
                // component={Button}
                // to={`/artist/${productDetails?.artist?.custom_url}`}
                src={productDetails?.artist?.profile_picture}
                style={{
                  marginTop: "4px",
                  width: "60px",
                  height: "60px",
                }}
              />
            </IconButton>
            <Grid
              item
              style={{
                paddingTop: theme.spacing(0.5),
                marginBottom: theme.spacing(5),
              }}>
              <Typography
                style={{ cursor: "pointer" }}
                variant='h5'
                onClick={() => {
                  history.push(`/artist/${productDetails?.artist?.custom_url}`);
                }}>
                {productDetails?.artist?.full_name}
              </Typography>
              <Typography
                style={{ cursor: "pointer" }}
                variant='h6'
                onClick={() => {
                  history.push(`/artist/${productDetails?.artist?.custom_url}`);
                }}>
                {productDetails?.artist?.custom_url}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='h3'>{productDetails?.name}</Typography>
          </Grid>
          <Grid item style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='caption' style={{ color: "#40567A" }}>
              {productDetails?.category}
            </Typography>
          </Grid>
          <Grid
            container
            direction='column'
            item
            style={{ marginBottom: theme.spacing(3) }}>
            {productDetails?.description?.split("\n")?.map((data, i) => (
              <Grid container item key={i}>
                <Typography
                  component='div'
                  variant='caption'
                  style={{
                    color: "#263957",
                    width: "100%",
                    minHeight: "16px",
                  }}>
                  {data}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='h4'>
              ₹{productDetails?.kalafex_price}/-
            </Typography>
            {"  "}
            <Typography
              variant='caption'
              style={{ marginTop: theme.spacing(0.5) }}>
              including all taxes
            </Typography>
          </Grid>
          {/* <Grid item style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='subtitle2'>
              Get you product delivered by 12th February 2021
            </Typography>
          </Grid> */}
          <Grid item>
            <Button
              variant='contained'
              onClick={() => {
                if (!token) {
                  history.push("/user/signup");
                  setSnackbar({
                    value: true,
                    message: "Please signup to make a purchase",
                    type: "info",
                  });
                } else {
                  AddToCart(
                    { product: productDetails.pid, quantity: "1" },
                    setLoading,
                    setSnackbar,
                  );
                }
              }}
              style={{
                ...theme.palette.background.gradient,
                marginRight: theme.spacing(2.5),
                marginBottom: theme.spacing(2),
                padding: "16px 24px",
                // background: "white",
                color: "white",
              }}>
              <Typography variant='h5'>
                Add to cart
                <ShoppingCartOutlinedIcon
                  style={{
                    marginLeft: theme.spacing(2),
                    color: "white",
                    position: "relative",
                    fontSize: "20px",
                    top: "4px",
                    // color: theme.palette.secondary.main,
                  }}
                />
              </Typography>
            </Button>
            {/* <Button
              onClick={() => {
                if (!token) {
                  history.push("/user/signup");
                  setSnackbar({
                    value: true,
                    message: "Please signup to make a purchase",
                    type: "info",
                  });
                } else {
                  // AddToCart(
                  //   { product: productDetails.pid, quantity: "1" },
                  //   setLoading,
                  //   setSnackbar,
                  // );
                }
              }}
              variant='contained'
              style={{
                ...theme.palette.background.gradient,
                marginBottom: theme.spacing(2),
                padding: "16px 32px",
                color: "white",
              }}>
              <Typography variant='h5'>Buy Now</Typography>
            </Button> */}
          </Grid>
          {token && (
            <Grid>
              <UserReviewSection productId={pid} />
            </Grid>
          )}
          {!token && (
            <Grid>
              <ReviewSection productId={pid} />
            </Grid>
          )}
        </Grid>
        {token && (
          <Grid>
            <OtherReviewSection productId={pid} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProductDetails;
