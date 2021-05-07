import {
  Avatar,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import bannerImg from "../assets/bannerImg.png";
import Products from "../components/Products";
import { UIContext } from "../Context/UIContext";
const useStyles = makeStyles((theme) => ({
  large: {
    width: "125px",
    height: "125px",
    position: "absolute",
    top: "-50px",
    left: "50px",
  },
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

const ArtistPage = (props) => {
  const classes = useStyles();
  let { url } = useParams();
  const theme = useTheme();
  const { setLoading } = useContext(UIContext);

  const [aData, setAData] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}accounts/view_particular_artist/${url}/`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        console.log(response.data);
        setAData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);
  useEffect(() => {
    if (aData) {
      var config = {
        method: "get",
        url: `${process.env.REACT_APP_URL}store/view/product/artist/${aData?.[0]?.user}/`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          setProducts(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return () => {};
  }, [aData]);

  console.log(products);
  return (
    <Grid
      container
      direction='column'
      className={props.artist ? null : classes.root}>
      <div
        item
        container
        style={{
          background: `url(${bannerImg}) center center / cover no-repeat `,
          maxHeight: "30vh",
          height: "30vh",
        }}
        xs={12}></div>
      <Grid container item style={{ position: "relative" }}>
        <Avatar
          alt='profile pic'
          src={aData?.[0]?.profile_picture}
          className={classes.large}
        />
        <Typography
          variant='h3'
          style={{ position: "absolute", left: "200px" }}>
          {aData?.[0]?.full_name}
        </Typography>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: theme.spacing(16) }} item>
        {products && products.count !== 0 ? (
          <Products data={products?.results} />
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
              No Products Found
            </Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ArtistPage;
