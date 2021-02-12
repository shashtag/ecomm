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

import loginTxt from "../../assets/authImgs/loginTxt.png";

import { KeyboardDatePicker } from "@material-ui/pickers";

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

const Form1 = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedDate, handleDateChange] = useState(new Date(2001, 0, 1));
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
            marginTop: "8vh",
            marginBottom: theme.spacing(1),
            fontWeight: 400,
          }}
          color='secondary'>
          Sign up as Artist
        </Typography>
      </Grid>
      <Grid container item direction='column'>
        <form className={classes.form} autoComplete='off'>
          <Grid item>
            <TextField
              className={classes.input}
              label='Name'
              name='name'
              variant='outlined'
              color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your name'
            />
          </Grid>
          <Grid item>
            <KeyboardDatePicker
              autoOk
              animateYearScrolling
              disableFuture
              // clearable
              // disableToolbar
              // color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              format='dd/MM/yyyy'
              label='Date of Birth'
              className={[classes.input, classes.dateInp].join(" ")}
              inputVariant='outlined'
              value={selectedDate}
              onChange={(date) => handleDateChange(date)}
            />
          </Grid>
          <Grid item style={{ marginBottom: theme.spacing(2) }}>
            <TextField
              className={classes.input}
              label='Phone'
              name='phone'
              variant='outlined'
              color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your Phone number'
            />
          </Grid>
          <Grid
            item
            style={{
              marginBottom: theme.spacing(4),
              marginTop: -theme.spacing(1.5),
            }}>
            <Typography variant='caption' style={{ fontWeight: "400" }}>
              We will send you code for verification :)
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
              <Typography variant='h5'>Send OTP</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
      <Typography variant='h6' style={{ fontWeight: 500, display: "inline" }}>
        Already have an account.
        <Link to='/login' style={{ fontWeight: 500, display: "inline" }}>
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
    </>
  );
};

export default Form1;
