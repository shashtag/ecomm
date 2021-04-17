import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  IconButton,
  Link,
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
}));

const ProductDetails = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { pid } = useParams();
  const { setLoading } = useContext(UIContext);

  const [desc, setDesc] = useState(null);
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
        setProductDetails(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
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

  return (
    <>
      <Grid
        container
        item
        xs={12}
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
            <Carousel animation='slide'>
              {imgs.map((img, i) => (
                <Paper
                  key={i}
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",

                    margin: theme.spacing(1),
                    background: `#ffffff url("${img}")  no-repeat  center center `,
                    backgroundSize: "contain",
                  }}></Paper>
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
              <Typography variant='h6'>{productDetails?.name}</Typography>
              <Typography variant='h6'>
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
                  style={{ color: "#263957", width: "100%" }}>
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
          <Grid item style={{ marginBottom: theme.spacing(3) }}>
            <Typography variant='subtitle2'>
              Get you product delivered by 12th February 2021
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: theme.spacing(3) }}>
            <Button
              variant='contained'
              style={{
                ...theme.palette.background.gradient,
                padding: "16px 32px",
                marginRight: theme.spacing(2.5),
                color: "white",
              }}>
              <Typography variant='h5'>Buy Now</Typography>
            </Button>
            <Button
              variant='contained'
              style={{
                padding: "16px 24px",
                marginLeft: "4px",
                background: "white",
              }}>
              <Typography variant='h5'>
                Add to cart
                <ShoppingCartOutlinedIcon
                  style={{
                    marginLeft: theme.spacing(2),
                    position: "relative",
                    fontSize: "20px",
                    top: "4px",
                    color: theme.palette.secondary.main,
                  }}
                />
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
