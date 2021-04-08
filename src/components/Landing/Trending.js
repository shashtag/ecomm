import React, { useEffect, useContext } from "react";
import axios from "axios";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  // Button,
} from "@material-ui/core";
import Product from "../Product";
import { UIContext } from "../../Context/UIContext";
// import { trending } from "../../API/Get";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    marginTop: "150px",
    marginBottom: "50px",
    [theme.breakpoints.up("md")]: {
      padding: "0px 3.2%",
    },
  },
}));

const Trending = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { trendingProducts, setTrendingProducts } = useContext(UIContext);
  const res = ["sdsd", "sdsd", "sdsd", "sdsd"];
  let trending = res.map((key, i) => <Product key={i} />);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}store/view/product/popular/`,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setTrendingProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  trending = trendingProducts?.results.map((product, i) => (
    <Product
      name={product.name}
      img={product.display_image}
      pid={product.pid}
      artist={product.artist}
      category={product.category}
      subcategory={product.subcategory}
      price={product.kalafex_price}
      key={i}
    />
  ));

  return (
    <>
      <Grid container spacing={4} direction='column' className={classes.root}>
        <Grid item container>
          <Grid item>
            <Typography variant='h5'>Trending Designs this week</Typography>
          </Grid>
          <div style={{ flexGrow: 1 }}></div>
          <Grid item>
            <Typography variant='h6' color='secondary'>
              View more
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify='space-around'
          alignItems='center'
          spacing={2}>
          {trending}
        </Grid>
      </Grid>
    </>
  );
};

export default Trending;
