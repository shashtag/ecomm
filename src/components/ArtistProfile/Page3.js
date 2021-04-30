import React, { useContext } from "react";
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
import { APContext } from "../../Context/APContext";
import { UIContext } from "../../Context/UIContext";
import { patchArtistDetails, patchUsrDetails } from "../../API/Patch";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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

const Page3 = (props) => {
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const { register, handleSubmit, errors } = useForm();

  const {
    aadhar,
    setAadhar,
    GST,
    setGST,
    PAN,
    setPAN,
    // payment,
    // setPayment,
  } = useContext(APContext);
  const { setLoading, setSnackbar } = useContext(UIContext);
  const handlePageChange = () => {
    var data2 = JSON.stringify({ is_first_login: false });
    patchUsrDetails(data2, setLoading, setSnackbar);
    const data = {
      aadhar_card_no: aadhar,
      pan_card_no: PAN,
      gst_no: GST,
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
      () => {},
    );
  };
  return (
    <>
      <Grid container item>
        <Typography
          variant='h5'
          style={{ paddingTop: md ? theme.spacing(6) : theme.spacing(6) }}>
          Let us start by setting up your shop.
        </Typography>
      </Grid>
      <Grid item container justify='center'>
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
            <Grid container justify='center' item xs={12} md={6}>
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
            <Grid container justify='center' item xs={12} md={6}>
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
            {/* <Grid item xs={12} md={6} >
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
          <Grid
            item
            container
            style={{}}
            justify={md ? "flex-end" : "space-between"}>
            <Button
              component={Link}
              to='artist/dashboard'
              style={{
                padding: "12px 80px",
                borderRadius: "4px",
                background: theme.palette.grey[500],
                marginTop: theme.spacing(2),
              }}
              variant='contained'
              size='large'
              color='secondary'
              className={classes.loginButton}>
              <Typography variant='h5'>Skip or now</Typography>
            </Button>
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
      </Grid>
    </>
  );
};

export default Page3;
