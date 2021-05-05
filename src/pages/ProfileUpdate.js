import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import { fetchAddress } from "../API/Get";
import { patchUsrDetails } from "../API/Patch";
import { UIContext } from "../Context/UIContext";
import Address from "../ui/Address";
import NewAddress from "../ui/NewAddress";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 15px",
    paddingBottom: theme.spacing(20),
    marginTop: theme.spacing(4),
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      padding: "0vh 3.2%",
      paddingBottom: theme.spacing(20),
    },
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
}));

const ProfileUpdate = () => {
  const {
    usrBaseInfo,
    setUsrBaseInfo,
    pass,
    setPass,
    rePass,
    setRePass,
    curPass,
    setCurPass,
    setLoading,
    setSnackbar,
    usrAdresses,
    setUsrAdresses,
  } = useContext(UIContext);
  const classes = useStyles();
  const theme = useTheme();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    errors: errors2,
  } = useForm();
  const { register, handleSubmit, errors } = useForm();

  const handlePhoneChange = () => {
    const data = { phone_number: usrBaseInfo.phone_number };
    patchUsrDetails(data, setLoading, setSnackbar);
  };
  const handlePassChange = () => {
    setLoading(true);
    var data = {
      new_password: curPass,
      re_new_password: pass,
      current_password: rePass,
    };

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_URL}auth/users/set_password/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setLoading(false);
        setSnackbar({
          value: true,
          message:
            error.response.data.email?.[0] ||
            error.response.data.password?.[0] ||
            error.response.data.phone_number?.[0] ||
            error.response.data.date_of_birth?.[0] ||
            error.response.data.full_name?.[0],
          type: "error",
        });
        // console.log(error);
      });
  };

  useEffect(() => {
    if (!usrAdresses) {
      fetchAddress(setLoading, setUsrAdresses);
    }
    return () => {};
  }, []);

  if (!localStorage.getItem("Token")) {
    return <Redirect to='/login' />;
  }

  return (
    <Grid container item direction='column' className={classes.root}>
      <Grid container xs={12} item justify='space-between'>
        <Grid item>
          <Typography
            variant='h2'
            style={{
              fontWeight: "bold",
              marginBottom: theme.spacing(0.5),
              // color: "#40567A",
            }}
            color='secondary'>
            {usrBaseInfo?.full_name}
          </Typography>
          <Typography
            variant='h5'
            style={{ marginBottom: theme.spacing(5), opacity: "0.8" }}
            color='secondary'>
            Email : {usrBaseInfo?.email}
          </Typography>
        </Grid>
        {usrBaseInfo.is_artist ? null : (
          <Grid item>
            <Button
              // component={Link}
              // to='/artist/signup'
              onClick={() => {}}
              variant='contained'
              size='large'
              color='secondary'
              type='submit'
              style={{
                ...theme.palette.background.gradient,

                marginTop: theme.spacing(1),
                padding: "1rem 1.5rem",
              }}>
              <Typography variant='h5'>Become an artist</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item>
        <Typography
          variant='h4'
          style={{ marginBottom: theme.spacing(3) }}
          color='secondary'>
          Update phone
        </Typography>
      </Grid>
      <form
        style={{ width: "100%" }}
        autoComplete='off'
        onSubmit={handleSubmit2(handlePhoneChange)}>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              type='tel'
              className={classes.input}
              label='Phone Number'
              name='phone'
              variant='outlined'
              color='secondary'
              defaultValue={usrBaseInfo.phone_number}
              onChange={(e) => {
                setUsrBaseInfo({
                  ...usrBaseInfo,
                  phone_number: e.target.value.trim(),
                });
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter new Phone number'
              inputRef={register2({
                required: "Phone Number is required",
                pattern: {
                  value: /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/,
                  message: "Invalid Phone Number",
                },
              })}
              error={Boolean(errors2.phone)}
              helperText={errors2.phone?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              style={{
                marginBottom: theme.spacing(4),
                padding: "18px 80px",
                borderRadius: "4px",
                background: theme.palette.secondary.light,
              }}
              variant='contained'
              size='large'
              type='submit'
              color='secondary'
              className={classes.loginButton}>
              <Typography variant='h5'>Save</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item>
        <Typography
          variant='h4'
          style={{ marginBottom: theme.spacing(3) }}
          color='secondary'>
          Update password
        </Typography>
      </Grid>
      <form
        style={{ width: "100%" }}
        autoComplete='off'
        onSubmit={handleSubmit(handlePassChange)}>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              type='password'
              className={classes.input}
              label='Current Password'
              name='curpass'
              variant='outlined'
              color='secondary'
              value={curPass}
              onChange={(e) => {
                setCurPass(e.target.value.trim());
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your current password'
              inputRef={register({
                required: "Current password is required",
              })}
              error={Boolean(errors.curpass)}
              helperText={errors.curpass?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              className={classes.input}
              label='New password'
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <Button
              style={{
                marginBottom: theme.spacing(4),
                padding: "18px 80px",
                borderRadius: "4px",
                background: theme.palette.secondary.light,
              }}
              variant='contained'
              size='large'
              type='submit'
              color='secondary'
              className={classes.loginButton}>
              <Typography variant='h5'>Save</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item>
        <Typography
          variant='h4'
          style={{ marginBottom: theme.spacing(3) }}
          color='secondary'>
          Address
        </Typography>
      </Grid>
      <Grid container item spacing={8}>
        {usrAdresses
          ? usrAdresses?.map((data, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <Address
                    name={usrBaseInfo?.full_name}
                    id={data.a_id}
                    city={data.city}
                    pincode={data.pin_code}
                    state={data.state}
                    street={data.street}
                    type={data.address_type}
                  />
                </Grid>
              );
            })
          : null}

        <Grid item xs={12} sm={6} md={4}>
          <NewAddress />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileUpdate;
