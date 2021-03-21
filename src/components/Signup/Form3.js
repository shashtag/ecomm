import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SignupContext } from "../../Context/SignupContext";
import { signup1 } from "../../API/Post";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";
import { UIContext } from "../../Context/UIContext";
import SignupDialog from "../../ui/SignupDialog";

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

const Form3 = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const { register, handleSubmit, errors } = useForm();
  const { setLoading } = useContext(UIContext);
  const {
    selectedDate,
    name,
    email,
    phone,
    setPhone,
    pass,
    setPass,
    rePass,
    setRePass,
  } = useContext(SignupContext);

  const sendOtpClickHandler = () => {
    const type =
      props.type === "artist" ? { is_artist: true } : { is_customer: true };
    const data = {
      // selectedDate:selectedDate,
      email: email,
      full_name: name,
      password: pass,
      phone_number: phone,
      ...type,
    };
    signup1(data, setLoading, setOpen, props.setStep, props.step);
  };

  return (
    <>
      <Loading />
      <Grid container item direction='column'>
        <form
          className={classes.form}
          autoComplete='off'
          onSubmit={handleSubmit(sendOtpClickHandler)}>
          <Grid item>
            <TextField
              className={classes.input}
              label='Phone Number'
              name='phone'
              variant='outlined'
              color='secondary'
              defaultValue={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your Phone number'
              inputRef={register({
                required: "Phone Number is required",
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "Invalid Phone Number",
                },
              })}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
            />
          </Grid>

          <Grid item style={{}}>
            <TextField
              className={classes.input}
              label='Password'
              name='password'
              type='password'
              variant='outlined'
              color='secondary'
              defaultValue={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter password'
              inputRef={register({ required: "Please enter a password" })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
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
              defaultValue={rePass}
              onChange={(e) => {
                setRePass(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Re-enter password to confirm'
              inputRef={register({
                required: "Please Re-enter your Password",
                validate: (rePass) =>
                  pass !== rePass ? "Password does not match" : null,
              })}
              error={Boolean(errors.rePass)}
              helperText={errors.rePass?.message}
            />
          </Grid>

          <Grid item style={{}}>
            <Button
              style={{ padding: "20px 40px", borderRadius: "4px" }}
              variant='contained'
              size='large'
              type='submit'
              color='secondary'
              className={classes.loginButton}>
              <Typography variant='h5'>Submit</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
      <SignupDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Form3;
