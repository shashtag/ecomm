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
      .catch(function (error) {
        setLoading(false);
        setAData([
          {
            full_name: "Normal Dude",
            user: 2,
            bio: "super cool bio",
            custom_url: "normaldude1",
            cover_picture:
              "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            profile_picture:
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
        ]);
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
          setLoading(false);
          setProducts({
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
        });
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
      <Grid container spacing={2} style={{ marginTop: theme.spacing(4) }} item>
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
