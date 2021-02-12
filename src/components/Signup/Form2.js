import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
  form: {
    marginBottom: theme.spacing(2),
    "& .MuiFormLabel-root": {
      color: "rgba(0, 0, 0, 0.6)",
    },
    "& .MuiFormLabel-colorSecondary.Mui-focused": {
      color: "#152238 !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.6)",
      },
      "&:hover fieldset": {
        borderColor: "#152238 !important",
      },
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(34px, -6px) scale(0.75)",
    },
    "& legend": {
      marginLeft: "20px",
    },
  },
}));

const Form2 = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const sendOtpClickHandler = () => {
    props.setStep(props.step + 1);
  };

  return (
    <>
      <Grid item>
        <Typography
          variant='h3'
          component='div'
          style={{
            marginTop: "15vh",
            marginBottom: theme.spacing(1),
            fontWeight: 400,
          }}
          color='secondary'>
          Sign up as Artist
        </Typography>
      </Grid>
      <Grid container item direction='column'>
        <form className={classes.form} autoComplete='off'>
          <Grid item style={{ marginBottom: theme.spacing(2) }}>
            <TextField
              className={classes.input}
              label='Email'
              name='email'
              variant='outlined'
              color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your Email id'
            />
          </Grid>
          <Grid
            item
            style={{
              marginBottom: theme.spacing(4),
              marginTop: -theme.spacing(1.5),
            }}>
            <Typography variant='caption' style={{ fontWeight: "400" }}>
              Didn’t get the code? <span>Resend OTP</span>
            </Typography>
          </Grid>
          <Grid item style={{}}>
            <Button
              style={{ padding: "20px 40px", borderRadius: "4px" }}
              variant='contained'
              size='large'
              color='secondary'
              className={classes.loginButton}
              onClick={sendOtpClickHandler}>
              <Typography variant='h5'>Verify</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Form2;
