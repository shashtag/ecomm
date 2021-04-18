import React from "react";
import {
  fade,
  makeStyles,
  Typography,
  useTheme,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import facebook from "../assets/socialIcons/facebook.png";
import instagram from "../assets/socialIcons/instagram.png";
import linkedIn from "../assets/socialIcons/linkedIn.png";
import twitter from "../assets/socialIcons/twitter.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F6F6F6",
    padding: "75px 15px",
    [theme.breakpoints.up("md")]: {
      padding: "75px 3.2%",
    },
  },
  link: {
    color: " #232222",
    margin: theme.spacing(0, 0, 1, 0),
    display: "inline-block",
    textDecoration: "none",
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
              Company
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to='/about-us'
              variant='caption'
              noWrap
              className={classes.link}>
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='a'
              rel='noreferrer'
              href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/DISCLAIMER.pdf'
              target='_blank'
              variant='caption'
              noWrap
              className={classes.link}>
              Disclaimer
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='a'
              rel='noreferrer'
              href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/Terms+of+Use.pdf'
              target='_blank'
              variant='caption'
              noWrap
              className={classes.link}>
              Terms of Use
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='a'
              rel='noreferrer'
              href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/PRIVACY+NOTICE.pdf'
              target='_blank'
              variant='caption'
              noWrap
              className={classes.link}>
              Privacy
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component='a'
              rel='noreferrer'
              href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/RETURN+POLICY.pdf'
              target='_blank'
              variant='caption'
              noWrap
              className={classes.link}>
              Returns
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Newsletter
            </Typography>
          </Grid> */}
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
            {/* <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Guidelines
            </Typography> */}
          </Grid>
          <Grid item>
            {/* <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              How to promote
            </Typography> */}
          </Grid>
          <Grid item>
            {/* <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Artist FAQs
            </Typography> */}
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to='/artist/signup'
              variant='caption'
              noWrap
              className={classes.link}>
              Sell Your Art
            </Typography>
          </Grid>
          <Grid item>
            {/* <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Blog
            </Typography> */}
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
          {/* <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              FAQ
            </Typography>
          </Grid> */}
          <Grid item>
            <Typography
              component={Link}
              to='/contact'
              variant='caption'
              noWrap
              className={classes.link}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to='/user/trackOrder'
              variant='caption'
              noWrap
              className={classes.link}>
              Track My Order
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Contact Us
            </Typography>
          </Grid> */}
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
              component={Link}
              to='/search/Paintings & Artwork'
              variant='caption'
              noWrap
              className={classes.link}>
              Paintings & Artwork
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to='/search/Lifestyle & Home'
              variant='caption'
              noWrap
              className={classes.link}>
              Lifestyle & Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to='/search/Jewellery & Accessories'
              variant='caption'
              noWrap
              className={classes.link}>
              Jewellery & Accessories
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component={Link}
              to='/search/Collectibles'
              variant='caption'
              noWrap
              className={classes.link}>
              Collectibles
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography
              component='div'
              variant='caption'
              noWrap
              className={classes.link}>
              Explore more categories
            </Typography>
          </Grid> */}
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
          <div className={classes.search} style={{ position: "relative" }}>
            <InputBase
              placeholder='Enter your email'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <Button
              style={{
                position: "absolute",
                width: "120px",
                height: "62px",
                right: "0",
                top: "0",
                borderRadius: "0 5px 5px 0",
                background: "#40567A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Typography style={{ color: "white" }}>Subscribe</Typography>
              {/* <img
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  cursor: "pointer",
                }}
                src={subscribe}
                alt='search'
                height='100%'
              /> */}
            </Button>
          </div>
          <Typography variant='caption' color='secondary'>
            Follow @Kalafex at
          </Typography>
          <div style={{ display: "flex" }}>
            <div className={classes.icon}>
              <a
                href='https://www.instagram.com/kalafex_/'
                rel='noreferrer'
                target='_blank'>
                <img
                  width='31px'
                  height='31px'
                  src={instagram}
                  alt='instagram icon'
                />
              </a>
            </div>
            <div className={classes.icon}>
              <a
                href='https://www.facebook.com/kalafex/'
                rel='noreferrer'
                target='_blank'>
                <img
                  width='31px'
                  height='31px'
                  src={facebook}
                  alt='facebook icon'
                />
              </a>
            </div>
            <div className={classes.icon}>
              <a
                href='https://twitter.com/kalafex_'
                rel='noreferrer'
                target='_blank'>
                <img
                  width='31px'
                  height='31px'
                  src={twitter}
                  alt='twitter icon'
                />
              </a>
            </div>

            <div className={classes.icon}>
              <a
                href='https://www.linkedin.com/company/kalafex/'
                rel='noreferrer'
                target='_blank'>
                <img
                  width='31px'
                  height='31px'
                  src={linkedIn}
                  alt='linkedIn icon'
                />
              </a>
            </div>
            {/* <div className={classes.icon}>
              <img src={mail} alt='mail icon' />
            </div> */}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
