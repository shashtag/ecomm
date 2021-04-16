import { Grid, makeStyles, useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { search } from "../API/Get";
import Products from "../components/Products";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 15px",
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: "0vh 3.2%",
      paddingBottom: theme.spacing(20),
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  const { query } = useParams();
  const [products, setProducts] = useState("");
  const theme = useTheme();

  useEffect(() => {
    search(query, setProducts);
    return () => {};
  }, [query]);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        spacing={2}
        style={{ padding: theme.spacing(16, 0) }}>
        {products ? <Products data={products?.results} /> : null}
      </Grid>
    </Grid>
  );
};

export default Search;
