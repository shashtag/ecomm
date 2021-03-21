import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../ui/Logo";
import Loading from "../ui/Loading";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
import lgnBg from "../assets/authImgs/lgnBg.png";
import logoLogin from "../assets/logoLogin.png";
import signupTxt from "../assets/authImgs/signupTxt.png";
import { login } from "../API/Post";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  login: {
    // background: `url(${uspBg}) no-repeat `,
    // backgroundSize: "cover",
    // marginTop: theme.spacing(10),
    // padding: " 0 4%",
    minHeight: "100vh",
  },
  left: {
    padding: `${theme.spacing(4)}px 15px`,
    background: `rgba(255,255,255,0.6) url(${lgnBg}) center center / cover no-repeat`,
    backgroundBlendMode: "lighten",

    backgroundSize: "cover",

    [theme.breakpoints.up("md")]: {
      background: "none",
      padding: `${theme.spacing(4)}px 3.2%`,
    },
  },
  right: {
    background: `url(${lgnBg}) no-repeat `,
    backgroundSize: "cover",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
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

const Login = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const { register, handleSubmit, errors } = useForm();

  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { setLoading } = useContext(UIContext);

  console.log(props);

  const loginClickHandler = () => {
    const data = {
      email: email,
      password: pass,
    };
    login(data, setLoading, props.history);
  };

  return (
    <>
      <Loading />
      <Grid
        container
        // disableGutters
        className={classes.login}>
        <Grid
          container
          xs={12}
          md={6}
          item
          className={classes.left}
          direction='column'
          spacing={0}>
          <Logo />
          <Grid item>
            <Typography
              variant='h3'
              style={{
                marginTop: "14vh",
                marginBottom: theme.spacing(1),
                fontWeight: 400,
              }}
              color='secondary'>
              Welcome Back
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction='column'
            style={{ width: md ? "90%" : null }}>
            <form
              className={classes.form}
              autoComplete='off'
              onSubmit={handleSubmit(loginClickHandler)}>
              <Grid item>
                <TextField
                  className={classes.input}
                  label='Email/Phone number'
                  name='id'
                  variant='outlined'
                  color='secondary'
                  defaultValue={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder='Enter Email or Phone number'
                  inputRef={register({
                    required: "Email/Phone number is required",
                    pattern: {
                      value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                      message: "Invalid Email/Phone number ",
                    },
                  })}
                  error={Boolean(errors.id)}
                  helperText={errors.id?.message}
                />
              </Grid>
              <Grid item style={{ marginBottom: theme.spacing(2) }}>
                <TextField
                  className={classes.input}
                  type='password'
                  name='password'
                  label='Password'
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
                  inputRef={register({
                    required: "Please enter your password",
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid
                item
                style={{ textAlign: "end", marginBottom: theme.spacing(1) }}>
                <Typography variant='h6' style={{ fontWeight: "600" }}>
                  Forgot password?
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  style={{ padding: "20px 60px", borderRadius: "4px" }}
                  variant='contained'
                  color='secondary'
                  type='submit'
                  className={classes.loginButton}>
                  <Typography variant='h5'>Log in</Typography>
                </Button>
              </Grid>
            </form>
          </Grid>
          <Typography
            variant='h6'
            style={{ fontWeight: 500, display: "inline" }}>
            Don’t have an account.
            <Link
              to='/user/signup'
              style={{ fontWeight: 500, display: "inline" }}>
              <img
                style={{
                  display: "inline",
                  marginBottom: "-3px",
                  marginLeft: "6px",
                }}
                src={signupTxt}
                alt='Signup Text'
              />
            </Link>
          </Typography>
        </Grid>
        <Grid container item md={6} xs={12} className={classes.right}></Grid>
      </Grid>
    </>
  );
};

export default Login;
