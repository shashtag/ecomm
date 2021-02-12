import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import signupBg from "../assets/authImgs/signupBg.png";
import signupBg2 from "../assets/authImgs/signupBg2.png";
import signupBg3 from "../assets/authImgs/signupBg3.png";
import logoLogin from "../assets/logoLogin.png";
import TimelineComp from "../components/Signup/TimelineComp";
import Form1A from "../components/Signup/Form1A";
import Form1C from "../components/Signup/Form1C";
import Form2 from "../components/Signup/Form2";
import Form3 from "../components/Signup/Form3";

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

  const [step, setStep] = useState(0);

  return (
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
          backgroundPosition: "center",
          background: md
            ? null
            : step === 0
            ? `rgba(255,255,255,0.6) url(${signupBg}) center center / cover no-repeat `
            : step === 1
            ? `rgba(255,255,255,0.6) url(${signupBg2}) center center / cover no-repeat`
            : ` rgba(255,255,255,0.6) url(${signupBg3}) center center / cover no-repeat`,
        }}>
        <Grid item container direction='column' md={8}>
          <Grid item component={Link} to='/'>
            <img src={logoLogin} alt='kalafax logo' />
          </Grid>
          {step === 0 ? (
            props.type === "artist" ? (
              <Form1A setStep={setStep} step={step} />
            ) : (
              <Form1C setStep={setStep} step={step} />
            )
          ) : step === 1 ? (
            <Form2 setStep={setStep} step={step} />
          ) : (
            <Form3 setStep={setStep} step={step} />
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
              ? `url(${signupBg}) no-repeat`
              : step === 1
              ? `url(${signupBg2}) no-repeat`
              : `url(${signupBg3}) no-repeat`,
          backgroundSize: "cover",
        }}>
        <div style={{ display: step === 0 ? null : "none" }}>
          <Typography
            variant='h5'
            color='primary'
            style={{ marginTop: theme.spacing(8) }}>
            Get your product dellivered directly
          </Typography>
          <Typography
            variant='h5'
            color='primary'
            style={{ marginTop: theme.spacing(4) }}>
            Earn easy profit
          </Typography>
          <Typography
            variant='h5'
            color='primary'
            style={{ marginTop: theme.spacing(4) }}>
            Get your product dellivered directly
          </Typography>
          <Typography
            variant='h5'
            color='primary'
            style={{ marginTop: theme.spacing(4) }}>
            Get your product dellivered directly
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignupArtist;
