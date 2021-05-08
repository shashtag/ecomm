import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { fetchSearch, fetchTrendingProducts } from "../API/Get";
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
  const { page } = useParams();
  // console.log(page);

  const { query } = useParams();
  const [products, setProducts] = useState(null);
  const theme = useTheme();
  const history = useHistory();
  const { setLoading, trendingProducts, setSnackbar } = useContext(UIContext);
  const [trendingOnPage, setTrendingOnPage] = useState(null);
  const [pagination, setPagination] = useState(page ? Number(page) : 1);

  const handlePageChange = (event, value) => {
    setPagination(value);

    if (props.trending) {
      if (value !== 1) {
        history.push(`/trending/${value}`);
      } else {
        history.push(`/trending`);
      }
    }
    if (!props.trending) {
      if (value !== 1) {
        history.push(`/search/${query}/${value}`);
      } else {
        history.push(`/search/${query}/`);
      }
    }
  };

  useEffect(() => {
    setPagination(page ? page : 1);
    if (props.trending) {
      if (page) {
        fetchTrendingProducts(page, setTrendingOnPage, setLoading, setSnackbar);
      }
    }

    return () => {};
  }, [page]);

  useEffect(() => {
    if (!props.trending) {
      fetchSearch(query, page, setProducts, setLoading);
    }
    return () => {};
  }, [query, page]);

  if (!products && !trendingProducts && !trendingOnPage) {
    return <div style={{ height: "80vh" }}></div>;
  }

  // console.log(trendingOnPage);
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography variant='h3'>
          {!props.trending ? query : "Trending"}
        </Typography>
      </Grid>
      {products?.results?.length === 0 ||
      trendingOnPage?.results?.length === 0 ||
      trendingProducts?.results.length === 0 ? (
        <div
          style={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center",
            height: "100%",
            width: "100%",
          }}>
          <Typography variant='h1' align='center' style={{ opacity: "0.3" }}>
            No Items Found
          </Typography>
        </div>
      ) : null}
      <Grid container item spacing={2} style={{ padding: theme.spacing(2, 0) }}>
        {props.trending ? (
          !page ? (
            <Products data={trendingProducts?.results} />
          ) : trendingOnPage ? (
            <Products data={trendingOnPage?.results} />
          ) : null
        ) : products ? (
          <Products data={products?.results} />
        ) : null}
      </Grid>
      <Grid container item xs={12} justify='center'>
        <Pagination
          style={{ marginTop: theme.spacing(4) }}
          size='large'
          count={
            trendingOnPage?.total_pages ||
            products?.total_pages ||
            trendingProducts?.total_pages
          }
          page={Number(pagination)}
          onChange={handlePageChange}
          variant='outlined'
          shape='rounded'
        />
      </Grid>
    </Grid>
  );
};

export default Search;
