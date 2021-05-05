import React, { useContext, useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  TextField,
  useMediaQuery,
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
    marginTop: "10vh",

    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
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
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const handlePageChange = () => {
    const data = {
      address_type: props.type,
      street: flat,
      city: city,
      state: state,
      pin_code: pinCode,
    };
    addAddress(
      data,
      setLoading,
      props.usr ? () => {} : props.setPage,
      props.page,
      props.usr,
    );
  };

  return (
    <>
      <Grid item>
        <Typography
          variant='h5'
          style={{ paddingTop: md ? theme.spacing(6) : theme.spacing(6) }}>
          Please add a new address
        </Typography>
      </Grid>
      <Grid container item justify='center'>
        <form
          style={{ width: "100%" }}
          autoComplete='off'
          onSubmit={handleSubmit(handlePageChange)}>
          <Grid
            item
            container
            justify='center'
            spacing={md ? 4 : 4}
            style={{
              marginBottom: md ? theme.spacing(4) : theme.spacing(4),
              marginTop: md ? theme.spacing(4) : theme.spacing(4),
            }}>
            <Grid container justify='center' item xs={12} md={6}>
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
                  required: "Flat/Street is required",
                })}
                error={Boolean(errors.flat)}
                helperText={errors.flat?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
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
            <Grid container justify='center' item xs={12} md={6}>
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
            <Grid container justify='center' item xs={12} md={6}>
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
              <Typography variant='h5'>Add</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Page2;
