import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSearch } from "../API/Get";
import Products from "../components/Products";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 15px",
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(4),
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      padding: "0vh 3.2%",
      paddingBottom: theme.spacing(20),
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();

  const { query } = useParams();
  const [products, setProducts] = useState(null);
  const theme = useTheme();
  const { setLoading, trendingProducts } = useContext(UIContext);

  useEffect(() => {
    if (!props.trending) {
      fetchSearch(query, setProducts, setLoading);
    }
    return () => {};
  }, [query, props.trending]);

  if (!products && !trendingProducts) {
    return <div style={{ height: "80vh" }}></div>;
  }
  console.log(products?.results.length);
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography variant='h3'>
          {!props.trending ? query : "Trending"}
        </Typography>
      </Grid>
      {products?.results.length === 0 ? (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "100%",
            width: "100%",
          }}>
          <Typography variant='h1' style={{ opacity: "0.3" }}>
            No Items Found
          </Typography>
        </div>
      ) : null}
      <Grid container item spacing={2} style={{ padding: theme.spacing(2, 0) }}>
        {props.trending ? (
          <Products data={trendingProducts?.results} />
        ) : products ? (
          <Products data={products?.results} />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Search;
