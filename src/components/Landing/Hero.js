import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import heroImage1 from "../../assets/heroImgs/heroImage1.png";
import heroImage2 from "../../assets/heroImgs/heroImage2.png";
import heroImage3 from "../../assets/heroImgs/heroImage3.png";
import heroImage4 from "../../assets/heroImgs/heroImage4.png";
import heroImage5 from "../../assets/heroImgs/heroImage5.png";
import heroImage6 from "../../assets/heroImgs/heroImage6.png";
import heroBg from "../../assets/heroBg.png";
import { UIContext } from "../../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  hero: {
    background: `url(${heroBg}) no-repeat right 50px`,
    backgroundSize: "280px",
    padding: "0 15px",
    paddingBottom: theme.spacing(20),
    marginBottom: "6vh",
    [theme.breakpoints.up("md")]: {
      padding: "0vh 3.2%",
      paddingBottom: theme.spacing(20),
    },
  },
  titleCont: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  heroButton: {
    ...theme.palette.background.gradient,
    marginTop: theme.spacing(4),
    padding: "16px 24px",
    marginLeft: "4px",
  },
  heroImgs: {
    position: "absolute",
    transition: "transform 0.4s ",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  img1: {
    zIndex: 100,
    top: "20px",
    left: "2%",
  },
  img2: {
    zIndex: 300,

    top: "100px",
    left: "32%",
  },
  img3: {
    zIndex: 200,
    top: "12px",
    right: "-5%",
  },
  img4: {
    zIndex: 400,
    top: "250px",
    left: "16%",
  },
  img5: {
    zIndex: 600,
    top: "350px",
    left: "38%",
  },
  img6: {
    zIndex: 500,
    top: "210px",
    right: "11%",
  },
}));

const Hero = () => {
  const classes = useStyles();
  const { usrBaseInfo, token } = useContext(UIContext);
  return (
    <Grid container spacing={0} className={classes.hero}>
      <Grid xs={12} md={4} item>
        <div className={classes.titleCont}>
          <Typography variant='h1' color='secondary'>
            SELL
          </Typography>
          <Typography variant='h1' color='secondary'>
            YOUR
          </Typography>
          <Typography variant='h1' color='secondary'>
            ARTWORK
          </Typography>
        </div>
        <Typography variant='h5' color='secondary'>
          Appreciating craftsmanship through a community marketplace where you
          can buy physical pieces of creativity anywhere, anytime.{" "}
        </Typography>
        <Button
          component={Link}
          to={
            token
              ? usrBaseInfo?.is_artist
                ? "/artist/dashboard"
                : "/user/profile"
              : "/artist/signup"
          }
          variant='contained'
          size='large'
          color='secondary'
          className={classes.heroButton}>
          <Typography variant='h5'>Start Selling</Typography>
        </Button>
      </Grid>

      <Grid md={8} item style={{ position: "relative" }}>
        <div className={[classes.heroImgs, classes.img1].join(" ")}>
          <img
            src={heroImage1}
            loading='lazy'
            alt='hero image1'
            width='100%'
            height='100%'
          />
        </div>
        <div className={[classes.heroImgs, classes.img2].join(" ")}>
          <img
            src={heroImage2}
            loading='lazy'
            alt='hero image2'
            width='100%'
            height='100%'
          />
        </div>
        <div className={[classes.heroImgs, classes.img3].join(" ")}>
          <img src={heroImage3} alt='hero image3' width='100%' height='100%' />
        </div>
        <div className={[classes.heroImgs, classes.img4].join(" ")}>
          <img
            src={heroImage4}
            loading='lazy'
            alt='hero image4'
            width='100%'
            height='100%'
          />
        </div>
        <div className={[classes.heroImgs, classes.img5].join(" ")}>
          <img
            src={heroImage5}
            loading='lazy'
            alt='hero image5'
            width='100%'
            height='100%'
          />
        </div>
        <div className={[classes.heroImgs, classes.img6].join(" ")}>
          <img
            src={heroImage6}
            loading='lazy'
            alt='hero image6'
            width='100%'
            height='100%'
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Hero;
