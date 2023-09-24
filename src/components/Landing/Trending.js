import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Product from "../Product";
import { UIContext } from "../../Context/UIContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    marginTop: "100px",
    [theme.breakpoints.up("md")]: {
      padding: "0px 3.2%",
    },
  },
}));

const Trending = () => {
  const classes = useStyles();
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
        // console.log(JSON.stringify(response.data));
        setTrendingProducts(response.data);
      })
      .catch(function (error) {
        setTrendingProducts({
          count: 2,
          next: null,
          previous: null,
          results: [
            {
              pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
              name: "Art Piece one",
              artist: 2,
              category: "accessories",
              subcategory: "bands",
              original_price: "500.00",
              kalafex_price: "525.00",
              display_image:
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
            },
            {
              pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
              name: "Art Piece two",
              artist: 2,
              category: "accessories",
              subcategory: "bands",
              original_price: "525.00",
              kalafex_price: "551.25",
              display_image:
                "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
            {
              pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
              name: "Art Piece one",
              artist: 2,
              category: "accessories",
              subcategory: "bands",
              original_price: "500.00",
              kalafex_price: "525.00",
              display_image:
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
            },
            {
              pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
              name: "Art Piece two",
              artist: 2,
              category: "accessories",
              subcategory: "bands",
              original_price: "525.00",
              kalafex_price: "551.25",
              display_image:
                "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
          ],
        });

        // console.log(error);
      });
  }, []);

  trending = trendingProducts?.results?.slice(0, 4).map((product, i) => {
    return (
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
    );
  });

  return (
    <>
      <Grid container spacing={4} direction='column' className={classes.root}>
        <Grid item container>
          <Grid item>
            <Typography variant='h5'>Trending Designs</Typography>
          </Grid>
          <div style={{ flexGrow: 1 }}></div>
          <Grid item>
            <Typography
              component={Link}
              to='/trending'
              variant='h6'
              color='secondary'>
              View more
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems='center' spacing={2}>
          {trending}
        </Grid>
      </Grid>
    </>
  );
};

export default Trending;
