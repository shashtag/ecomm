import React from "react";
import {
  AppBar,
  Toolbar,
  fade,
  makeStyles,
  Typography,
  useTheme,
  Button,
  InputBase,
  Grid,
} from "@material-ui/core";
import subscribe from "../assets/subscribe.png";
import facebook from "../assets/socialIcons/facebook.png";
import instagram from "../assets/socialIcons/instagram.png";
import linkedIn from "../assets/socialIcons/linkedIn.png";
import mail from "../assets/socialIcons/mail.png";
import twitter from "../assets/socialIcons/twitter.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F4F4F4",
    padding: "75px 15px",
    [theme.breakpoints.up("md")]: {
      padding: "75px 3.2%",
    },
  },
  link: {
    color: " #787777",
    margin: theme.spacing(0, 0, 1, 0),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: `1px ${theme.palette.secondary.main} solid`,
    display: "flex",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    width: "100%",
    maxWidth: "500px",
    boxSizing: "border-box",
    padding: "16px",
  },

  inputRoot: {
    width: "100%",
  },
  inputInput: {
    ...theme.typography.caption,
    color: theme.palette.secondary.main,
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": {
      color: theme.palette.secondary.light,
    },
  },
  icon: {
    padding: theme.spacing(1.5, 2.5, 1, 0),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} md={7} spacing={0} className={classes.left}>
        <Grid item xs={5} sm={6} md={3} container direction='column'>
          <Grid item>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: theme.spacing(2, 0, 2, 0) }}>
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Newsletter
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3} container direction='column'>
          <Grid item>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: theme.spacing(2, 0, 2, 0) }}>
              Artists
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Guidelines
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              How to promote
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Artist FAQs
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Sell Your Art
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Blog
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5} sm={6} md={3} container direction='column'>
          <Grid item>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: theme.spacing(2, 0, 2, 0) }}>
              Help
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              FAQ
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Track My Order
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Contact Us
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3} container direction='column'>
          <Grid item>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: theme.spacing(2, 0, 2, 0) }}>
              Shop
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Canvas Prints
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Art Prints & Framed Art Prints
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Comforters & Duvet Covers
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Jewelries
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Explore more categories
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid md={1} item></Grid>
      <Grid item container xs={12} md={4} className={classes.right}>
        <Grid xs={12} item style={{ margin: theme.spacing(2, 0, 2, 0) }}>
          <Typography
            variant='caption'
            style={{ margin: theme.spacing(2, 0, 2, 0) }}>
            Sign up to receive exclusive offers, decor tips and features about{" "}
            <b>Kalafex artists.</b>
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder='Enter your email'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div>
              <img
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  cursor: "pointer",
                }}
                src={subscribe}
                alt='search'
                height='100%'
              />
            </div>
          </div>
          <Typography variant='caption' color='secondary'>
            Follow @Kalafex at
          </Typography>
          <div style={{ display: "flex" }}>
            <div className={classes.icon}>
              <img src={facebook} alt='facebook icon' />
            </div>
            <div className={classes.icon}>
              <img src={instagram} alt='instagram icon' />
            </div>
            <div className={classes.icon}>
              <img src={linkedIn} alt='linkedIn icon' />
            </div>
            <div className={classes.icon}>
              <img src={mail} alt='mail icon' />
            </div>
            <div className={classes.icon}>
              <img src={twitter} alt='twitter icon' />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
