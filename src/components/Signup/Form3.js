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

const Form3 = (props) => {
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

          <Grid item style={{}}>
            <TextField
              className={classes.input}
              label='Password'
              name='email'
              type='password'
              variant='outlined'
              color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter password'
            />
          </Grid>
          <Grid item style={{ marginBottom: theme.spacing(4) }}>
            <TextField
              className={classes.input}
              label='Re-Enter Password'
              name='rePass'
              type='password'
              variant='outlined'
              color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Re-enter password to confirm'
            />
          </Grid>

          <Grid item style={{}}>
            <Button
              style={{ padding: "20px 40px", borderRadius: "4px" }}
              variant='contained'
              size='large'
              color='secondary'
              className={classes.loginButton}
              onClick={sendOtpClickHandler}>
              <Typography variant='h5'>Submit</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Form3;
