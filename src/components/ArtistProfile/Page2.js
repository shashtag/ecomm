import React, { useContext, useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Avatar,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { addAddress } from "../../API/Post";
import { UIContext } from "../../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  large: {
    width: "200px",
    height: "200px",
  },
  input: {
    width: "500px",
    maxWidth: "100%",
  },
}));

const Page2 = (props) => {
  const { setLoading } = useContext(UIContext);
  const classes = useStyles();
  const theme = useTheme();
  const [flat, setFlat] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const handlePageChange = () => {
    const data = {
      address_type: "Pickup",
      street: flat,
      city: city,
      state: state,
      pin_code: pinCode,
    };
    addAddress(data, setLoading, props.setPage, props.page);
  };

  return (
    <>
      <Grid item>
        <Typography variant='h5' style={{ paddingTop: theme.spacing(6) }}>
          Please enter your address for hassle free pick-up
        </Typography>
      </Grid>

      <form
        className={classes.form}
        autoComplete='off'
        onSubmit={handleSubmit(handlePageChange)}>
        <Grid
          item
          container
          justify='center'
          spacing={4}
          style={{
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(4),
          }}>
          <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='Flat/Street'
              name='flat'
              variant='outlined'
              color='secondary'
              value={flat}
              onChange={(e) => {
                setFlat(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your Street and Flat '
              inputRef={register({
                required: "Flat/Street' is required",
              })}
              error={Boolean(errors.flat)}
              helperText={errors.flat?.message}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='City'
              name='city'
              variant='outlined'
              color='secondary'
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your City'
              inputRef={register({
                required: "City is required",
              })}
              error={Boolean(errors.city)}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='State'
              name='state'
              variant='outlined'
              color='secondary'
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Choose State you live in'
              inputRef={register({
                required: "State is required",
              })}
              error={Boolean(errors.state)}
              helperText={errors.state?.message}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='Pincode'
              name='pincode'
              variant='outlined'
              color='secondary'
              value={pinCode}
              onChange={(e) => {
                setPinCode(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter 6 digit pincode'
              inputRef={register({
                required: "Pincode is required",
              })}
              error={Boolean(errors.pincode)}
              helperText={errors.pincode?.message}
            />
          </Grid>
        </Grid>
        <Grid item container style={{}} justify='flex-end'>
          <Button
            style={{
              padding: "12px 80px",
              borderRadius: "4px",
              background: theme.palette.secondary.light,
              marginTop: theme.spacing(2),
            }}
            variant='contained'
            size='large'
            type='submit'
            color='secondary'
            className={classes.loginButton}>
            <Typography variant='h5'>Next</Typography>
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default Page2;
