import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
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
  img_wrapper: {
    position: "relative",

    "&:hover": {
      cursor: "pointer",
      "& $span": {
        display: "table-cell",
      },

      "& $letter": {
        display: "none",
      },
    },
  },
  letter: {},
  span: {
    display: "none",
  },

  img_wrapper2: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&:hover": {
      cursor: "pointer",

      "& $bg_image": {
        filter: "blur(3px)",
      },
      "& $span2": {
        display: "table-cell",
      },
    },
  },

  bg_image: {},

  span2: {
    display: "none",
    filter: "blur(0)",
    position: "absolute",
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
        // console.log(response.data);
        setAData(response.data);
      })
      .catch(function (error) {
        // console.log(error);
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
          // console.log(error);
        });
    }
    return () => {};
  }, [aData]);

  // console.log(products);
  return (
    <Grid
      container
      direction="column"
      className={props.artist ? null : classes.root}
    >
      <div
        className={classes.img_wrapper2}
        style={{ maxHeight: "30vh", height: "30vh" }}
      >
        <div
          style={{
            background: `url(https://kalafex-images.s3.ap-south-1.amazonaws.com/Utils/bannerImg.png) center center / cover no-repeat `,
            width: "100%",
            height: "100%",
            transition: "0.1s ease-in-out all",
          }}
          xs={12}
          className={classes.bg_image}
        ></div>
        <span className={classes.span2}>
          <IconButton>
            <Edit style={{ fill: "white" }} />
          </IconButton>
        </span>
      </div>
      <Grid container item style={{ position: "relative" }}>
        <Avatar
          alt="profile pic"
          src={aData?.[0]?.profile_picture}
          className={[classes.large, classes.img_wrapper].join(" ")}
        >
          <span className={classes.letter}>{aData?.[0]?.full_name[0]}</span>
          <span className={classes.span}>
            <IconButton>
              <Edit style={{ fill: "white" }} />
            </IconButton>
          </span>
        </Avatar>

        <Typography
          variant="h3"
          style={{ position: "absolute", left: "200px" }}
        >
          {aData?.[0]?.full_name}
          {/* <IconButton>
            <Edit style={{ fill: "#777" }} fontSize="small" />
          </IconButton> */}
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
            }}
          >
            <Typography variant="h1" align="center" style={{ opacity: "0.3" }}>
              No Products Found
            </Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ArtistPage;
