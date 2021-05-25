import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  TextField,
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
  large1: {
    position: "absolute",
    top: "-50px",
    left: "50px",
    "&:hover": {
      "& $avatar_img": {
        filter: "brightness(50%)",
      },
    },
  },
  avatar_img: {
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    zIndex: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    pointerEvents: "none",
  },
}));

const ArtistPage = (props) => {
  const classes = useStyles();
  let { url } = useParams();
  const theme = useTheme();
  const { setLoading, setAvatar } = useContext(UIContext);

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
        setAData(response.data);
      })
      .catch(function (error) {});

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
        .catch(function (error) {});
    }
    return () => {};
  }, [aData]);

  return (
    <Grid
      container
      direction='column'
      className={props.artist ? null : classes.root}>
      {props.artist ? (
        <>
          <TextField
            name='avatar'
            accept='image/x-png,image/gif,image/jpeg,image/png'
            className={classes.input}
            id='banner-img'
            multiple
            type='file'
            style={{ display: "none" }}
            onChange={(e) => {
              setLoading(true);
              var data = new FormData();
              data.append("cover_picture", e.target?.files?.[0]);

              var config = {
                method: "patch",
                url: `${process.env.REACT_APP_URL}accounts/modify_artist/`,
                headers: {
                  Authorization: `Token ${localStorage.getItem("Token")}`,
                },
                data: data,
              };

              axios(config)
                .then(function (response) {
                  setLoading(false);
                  window.location.reload();
                })
                .catch(function (error) {
                  setLoading(false);
                });
            }}
          />
          <label
            htmlFor='banner-img'
            className={classes.img_wrapper2}
            style={{ maxHeight: "30vh", height: "30vh" }}>
            <div
              style={{
                background: `url(${aData[0]?.cover_picture}) center center / cover no-repeat `,
                width: "100%",
                height: "100%",
                transition: "0.1s ease-in-out all",
              }}
              xs={12}
              className={classes.bg_image}></div>
            <span className={classes.span2}>
              <IconButton style={{ pointerEvents: "none" }}>
                <Edit style={{ fill: "white", pointerEvents: "none" }} />
              </IconButton>
            </span>
          </label>
        </>
      ) : (
        <div
          className={props.artist ? classes.img_wrapper2 : null}
          style={{ maxHeight: "30vh", height: "30vh" }}>
          <div
            style={{
              background: `url(https://kalafex-images.s3.ap-south-1.amazonaws.com/Utils/bannerImg.png) center center / cover no-repeat `,
              width: "100%",
              height: "100%",
              transition: "0.1s ease-in-out all",
            }}
            xs={12}
            className={classes.bg_image}></div>
          <span className={classes.span2}>
            <IconButton>
              <Edit style={{ fill: "white" }} />
            </IconButton>
          </span>
        </div>
      )}
      <Grid container item style={{ position: "relative" }}>
        {props.artist ? (
          <>
            <TextField
              name='avatar'
              accept='image/x-png,image/gif,image/jpeg,image/png'
              className={classes.input}
              id='contained-button-file'
              multiple
              type='file'
              style={{ display: "none" }}
              onChange={(e) => {
                const reader = new FileReader();
                reader.onload = async () => {
                  if (reader.readyState === 2) {
                    await setAvatar({
                      decoded: e.target?.files?.[0],
                      encoded: reader.result,
                    });
                    setLoading(true);
                    var data = new FormData();
                    data.append("profile_picture", e.target?.files?.[0]);

                    var config = {
                      method: "patch",
                      url: `${process.env.REACT_APP_URL}accounts/modify_artist/`,
                      headers: {
                        Authorization: `Token ${localStorage.getItem("Token")}`,
                      },
                      data: data,
                    };

                    axios(config)
                      .then(function (response) {
                        setLoading(false);
                        window.location.reload();
                      })
                      .catch(function (error) {
                        setLoading(false);
                      });
                  }
                };
                reader.readAsDataURL(e.target?.files?.[0]);
                // setAvatar({ ...avatar, decoded: e.target?.files?.[0] });
              }}
            />
            <label htmlFor='contained-button-file'>
              <div className={[classes.large1, classes.img_wrapper].join(" ")}>
                <div
                  alt='default profile pic'
                  style={{
                    background: `url(${
                      aData?.[0]?.profile_picture || "/images/default.jpeg"
                    }) center center / cover no-repeat `,
                    transition: "0.1s ease-in-out all",
                  }}
                  // src={avatar.encoded}
                  className={classes.avatar_img}></div>
                <span className={classes.span}>
                  <Edit style={{ fill: "white", pointerEvents: "none" }} />
                </span>
              </div>
            </label>
          </>
        ) : (
          <Avatar
            src={aData?.[0]?.profile_picture}
            // productDetails?.artist?.profile_picture
            className={classes.large}
          />
        )}
        <Typography
          variant='h3'
          style={{
            position: "absolute",
            left: "200px",
            textTransform: "capitalize",
            background:
              "-webkit-linear-gradient(45deg,#FF8E53 40%,   #FE6B8B 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
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
