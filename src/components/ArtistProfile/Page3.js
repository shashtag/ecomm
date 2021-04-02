import React, { useContext } from "react";
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
import { APContext } from "../../Context/APContext";
import { UIContext } from "../../Context/UIContext";
import { patchArtistDetails } from "../../API/Patch";
import { useHistory } from "react-router-dom";

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

const Page3 = (props) => {
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();

  const { register, handleSubmit, errors } = useForm();

  const [
    ,
    ,
    aadhar,
    setAadhar,
    GST,
    setGST,
    PAN,
    setPAN,
    payment,
    setPayment,
  ] = useContext(APContext);
  const { setLoading } = useContext(UIContext);
  const handlePageChange = () => {
    const data = {
      aadhar_card_no: aadhar,
      pan_card_no: GST,
      gst_no: setPAN,
    };
    patchArtistDetails(
      data,
      props.setPage,
      props.page,
      setLoading,
      history,
      () => {},
      () => {},
      () => {},
      () => {},
    );
  };
  return (
    <>
      <Grid item>
        <Typography variant='h5' style={{ paddingTop: theme.spacing(6) }}>
          Let us start by setting up your shop.
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
              label='Aadhar card number'
              name='aadhar'
              variant='outlined'
              color='secondary'
              defaultValue={aadhar}
              onChange={(e) => {
                setAadhar(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your aadhar card number '
              inputRef={register({
                required: "Aadhar number is required",
              })}
              error={Boolean(errors.aadhar)}
              helperText={errors.aadhar?.message}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='GST number'
              name='GST'
              variant='outlined'
              color='secondary'
              defaultValue={GST}
              onChange={(e) => {
                setGST(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your GST number'
              inputRef={register({
                required: "GST number is required",
              })}
              error={Boolean(errors.GST)}
              helperText={errors.GST?.message}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='PAN Card number'
              name='PAN'
              variant='outlined'
              color='secondary'
              defaultValue={PAN}
              onChange={(e) => {
                setPAN(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your PAN card number'
              inputRef={register({
                required: "PAN is required",
              })}
              error={Boolean(errors.PAN)}
              helperText={errors.PAN?.message}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} style={{ marginTop: "10vh" }}>
            <TextField
              className={classes.input}
              label='Payment method'
              name='payment'
              variant='outlined'
              color='secondary'
              defaultValue={payment}
              onChange={(e) => {
                setPayment(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your preferred payment method'
              inputRef={register({
                required: "Payment method is required",
              })}
              error={Boolean(errors.payment)}
              helperText={errors.payment?.message}
            />
          </Grid> */}
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
            <Typography variant='h5'>Save</Typography>
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default Page3;
