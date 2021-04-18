import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import paysArtistBg from "../../assets/paysArtistBg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderRadius: "12px",

    // padding: "0px 15px",
    // marginTop: "150px",
    // marginBottom: "50px",
    // [theme.breakpoints.up("md")]: {
    //   padding: "0px 3.2%",
    // },
  },

  right: {
    padding: "60px 0",
    [theme.breakpoints.up("md")]: {
      paddingRight: "8vw",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "10vw",
      padding: "90px 0",
    },
  },
  left: {
    position: "relative",
  },
  img: {
    position: "absolute",
    right: "-100px",
    top: "-160px",
    [theme.breakpoints.up("sm")]: {
      right: "-75px",
    },
    [theme.breakpoints.up("md")]: {
      right: "4%",
      bottom: "0",
      top: "auto",
    },
  },
}));

const PaysArtist = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      style={{
        padding: sm ? "200px 3.2% 50px 3.2%" : "200 15px 50px 15px",
        // paddingTop: sm ? "200px" : "200px",
      }}>
      <Grid container className={classes.root}>
        <Grid xs={1} md={5} item className={classes.left}>
          <img
            // width='90%'
            // height='116%'
            className={classes.img}
            style={{}}
            src={paysArtistBg}
            alt='girl making a drawing'
          />
        </Grid>
        <Grid xs={10} md={7} item className={classes.right}>
          <Typography
            variant={sm ? "h2" : "h3"}
            style={{ fontWeight: 600, marginBottom: theme.spacing(3) }}>
            Every purchase pays an artist
          </Typography>
          <Typography
            variant='h6'
            align={md ? "left" : "justify"}
            style={{ marginBottom: theme.spacing(4) }}>
            Choose your favourite amongst our wide range of creative handmade
            products for your home and you. We offer the best-in-class artwork,
            home decor, collectibles and more for your everyday life. Order now
            and avail exciting offers!
          </Typography>
          <Button
            component={Link}
            to='/about'
            variant='outlined'
            style={{
              padding: theme.spacing(1.2, 4),
              backgroundColor: theme.palette.primary.main,
              borderRadius: "3px",
            }}>
            <Typography variant='h5'>Learn More</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaysArtist;
