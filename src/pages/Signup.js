import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../ui/Logo";

import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  // Button,
} from "@material-ui/core";
import signupBg from "../assets/authImgs/signupBg.png";
import signupBg2 from "../assets/authImgs/signupBg2.png";
import signupBg3 from "../assets/authImgs/signupBg3.png";
import TimelineComp from "../components/Signup/TimelineComp";
import Form1A from "../components/Signup/Form1A";
import Form2 from "../components/Signup/Form2";
import Form3 from "../components/Signup/Form3";
import loginTxt from "../assets/authImgs/loginTxt.png";
import { SignupProvider } from "../Context/SignupContext";
import registerNow from "../assets/authImgs/registerNow.png";

const useStyles = makeStyles((theme) => ({
  login: {
    minHeight: "100vh",
  },
  left: {
    padding: `${theme.spacing(4)}px 15px`,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(4)}px 0 ${theme.spacing(4)}px 3.2%`,
    },
  },
  right: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const SignupArtist = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const signupArtistHead = (
    <Grid item>
      <Typography
        variant='h3'
        component='div'
        style={{
          marginTop: "8vh",
          marginBottom: theme.spacing(1),
          fontWeight: 400,
        }}
        color='secondary'>
        Sign up as an Artist
      </Typography>
    </Grid>
  );
  const signupHead = (
    <Grid item>
      <Typography
        variant='h3'
        component='div'
        style={{
          marginTop: "8vh",
          marginBottom: theme.spacing(1),
          fontWeight: 400,
        }}
        color='secondary'>
        Sign up
      </Typography>
    </Grid>
  );

  const [step, setStep] = useState(0);
  if (localStorage.getItem("Token")) {
    return <Redirect to='/' />;
  }
  return (
    <SignupProvider>
      <Grid
        container
        // disableGutters
        className={classes.login}>
        <Grid
          container
          md={6}
          item
          className={classes.left}
          spacing={0}
          style={{
            backgroundBlendMode: "lighten",
            // backgroundPosition: "center",
            background: md
              ? null
              : step === 0
              ? `rgba(255,255,255,0.6) url(${signupBg}) center center / cover no-repeat `
              : step === 1
              ? `rgba(255,255,255,0.6) url(${signupBg2}) center center / cover no-repeat`
              : ` rgba(255,255,255,0.6) url(${signupBg3}) center center / cover no-repeat`,
          }}>
          <Grid item container direction='column' md={8}>
            <Logo />
            {step === 0 ? (
              props.type === "artist" ? (
                <>
                  {signupArtistHead}
                  <Form1A setStep={setStep} step={step} />
                  <Typography
                    variant='h6'
                    style={{
                      fontWeight: 500,
                      display: "inline",
                      textDecoration: "none",
                    }}>
                    Already have an account?{" "}
                    <Typography
                      variant='h6'
                      component={Link}
                      to='/login'
                      style={{ display: "inline", textDecoration: "none" }}>
                      <span
                        style={{
                          background:
                            "-webkit-linear-gradient(45deg, #FE6B8B 20%, #FF8E53 60%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}>
                        Register here
                      </span>
                    </Typography>
                  </Typography>
                </>
              ) : (
                <>
                  {signupHead}
                  <Form1A setStep={setStep} step={step} />
                  <Typography
                    variant='h6'
                    style={{ fontWeight: 500, display: "inline" }}>
                    Already have an account.
                    <Link
                      to='/login'
                      style={{ fontWeight: 500, display: "inline" }}>
                      <img
                        style={{
                          display: "inline",
                          marginBottom: "-3px",
                          marginLeft: "6px",
                        }}
                        src={loginTxt}
                        alt='Signup Text'
                      />
                    </Link>
                  </Typography>
                  <div
                    style={{
                      border: "1px solid #E1E1E1",
                      width: "200px",
                      margin: theme.spacing(1.5, 0.5),
                    }}></div>
                  <Typography
                    variant='h6'
                    style={{ fontWeight: 500, display: "inline" }}>
                    Want to sell your art?{" "}
                    <Typography
                      variant='h6'
                      component={Link}
                      to='/artist/signup'
                      style={{ display: "inline", textDecoration: "none" }}>
                      <span
                        style={{
                          background:
                            "-webkit-linear-gradient(45deg, #FE6B8B 20%, #FF8E53 60%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}>
                        Register here
                      </span>
                    </Typography>
                  </Typography>
                </>
              )
            ) : step === 1 ? (
              props.type === "artist" ? (
                <>
                  {signupArtistHead}
                  <Form3 setStep={setStep} step={step} type={props.type} />
                </>
              ) : (
                <>
                  {signupHead}
                  <Form3 setStep={setStep} step={step} type={props.type} />
                </>
              )
            ) : props.type === "artist" ? (
              <>
                {signupArtistHead}
                <Form2 setStep={setStep} step={step} />
              </>
            ) : (
              <>
                {signupHead}
                <Form2 setStep={setStep} step={step} />
              </>
            )}
          </Grid>
          {md ? (
            <Grid container item md={4} alignItems='center'>
              <Grid container justify='flex-end'>
                <TimelineComp step={step} />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid
          container
          item
          md={6}
          className={classes.right}
          justify='center'
          alignItems='center'
          style={{
            background:
              step === 0
                ? `url(${signupBg}) center center / cover no-repeat `
                : step === 1
                ? `url(${signupBg2}) center center / cover no-repeat`
                : ` url(${signupBg3}) center center / cover no-repeat`,
            // backgroundSize: "cover",
          }}>
          <div
            style={{
              display:
                props.type === "artist" ? (step === 0 ? null : "none") : "none",
            }}>
            <Typography
              variant='h5'
              color='primary'
              style={{ marginTop: theme.spacing(8) }}>
              Be a part of the community{" "}
            </Typography>
            <Typography
              variant='h5'
              color='primary'
              style={{ marginTop: theme.spacing(4) }}>
              Get door-to-door delivery
            </Typography>
            <Typography
              variant='h5'
              color='primary'
              style={{ marginTop: theme.spacing(4) }}>
              Hassle-free earnings
            </Typography>
            <Typography
              variant='h5'
              color='primary'
              style={{ marginTop: theme.spacing(4) }}>
              Widen your outreach
            </Typography>
          </div>
        </Grid>
      </Grid>
    </SignupProvider>
  );
};

export default SignupArtist;
