import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, makeStyles, Paper, useTheme } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { UIContext } from "../Context/UIContext";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

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

const ProductDetails = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { pid } = useParams();
  const { setLoading } = useContext(UIContext);

  const [productDetails, setProductDetails] = useState(null);

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
        console.log(error);
      });

    return () => {};
  }, []);

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
            padding: theme.spacing(0.75, 0),
          }}>
          {productDetails?.results?.[0]?.category}
        </Typography>
      </Grid>
      <Grid container direction='column' className={classes.root}>
        <Grid item>
          <Grid container item spacing={10}>
            <Grid container item md={4} spacing={1}>
              <Grid item xs={12}>
                <Paper style={{ height: "400px" }}>
                  <img src='n' alt=' Main img' />
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction='row'
                className={classes.smBanner}>
                <Paper
                  style={{
                    height: "125px",
                    width: "29%",
                    margin: theme.spacing(0, 1),
                  }}>
                  <img src='n' alt=' Side img' />
                </Paper>

                <Paper
                  style={{
                    height: "125px",
                    width: "29%",
                    margin: theme.spacing(0, 1),
                  }}>
                  <img src='n' alt=' Side img' />
                </Paper>

                <Paper
                  style={{
                    height: "125px",
                    width: "29%",
                    margin: theme.spacing(0, 1),
                  }}>
                  <img src='n' alt=' Side img' />
                </Paper>
              </Grid>
            </Grid>
            <Grid container md={8} item direction='column'>
              <Grid container direction='row' item>
                <Avatar
                  style={{
                    width: "60px",
                    height: "60px",
                    marginRight: theme.spacing(1),
                  }}
                />
                <Grid
                  item
                  style={{
                    paddingTop: theme.spacing(0.5),
                    marginBottom: theme.spacing(5),
                  }}>
                  <Typography variant='h6'>Artist Name</Typography>
                  <Typography variant='h6'>Artist Category</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='h3'>
                  {productDetails.results[0].name}
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: theme.spacing(3) }}>
                <Typography variant='caption' style={{ color: "#40567A" }}>
                  {productDetails.results[0].category}
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: theme.spacing(3) }}>
                <Typography variant='caption' style={{ color: "#263957" }}>
                  {productDetails.results[0].description}
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction='row'
                style={{ marginBottom: theme.spacing(3) }}>
                <Typography variant='h4'>
                  ₹{productDetails.results[0].kalafex_price}/-
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
                    padding: "16px 24px",
                    marginRight: theme.spacing(2.5),
                    color: "white",
                  }}>
                  <Typography variant='h5'>Proceed to checkout</Typography>
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
                        top: "4px",
                        color: theme.palette.secondary.main,
                      }}
                    />
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
