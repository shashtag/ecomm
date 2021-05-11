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
import { UIContext } from "../../Context/UIContext";
import { patchArtistDetails, patchUsrDetails } from "../../API/Patch";
import { useHistory } from "react-router-dom";
import { cashoutRequest } from "../../API/Post";

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
    setLoading,
    setSnackbar,
    aadhar,
    setAadhar,
    GST,
    setGST,
    PAN,
    setPAN,
    acc,
    setAcc,
    ifsc,
    setIfsc,
    accName,
    setAccName,
    branch,
    setBranch,
    UPI,
    setUPI,
  } = useContext(UIContext);
  const handlePageChange = () => {
    var data2 = JSON.stringify({ is_first_login: false });
    patchUsrDetails(data2, setLoading, setSnackbar, history, false);
    const data = {
      aadhar_card_no: aadhar,
      pan_card_no: PAN,
      gst_no: GST,
      account_number: acc,
      ifsc_code: ifsc,

      beneficiary_name: accName,
      bank_branch: branch,
      upi_id: UPI,
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
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
    );
    if (props.cashout) {
      cashoutRequest(setLoading, setSnackbar, props.oppFunc);
    }
  };
  return (
    <>
      <Grid container item>
        <Typography
          variant='h5'
          style={{ paddingTop: md ? theme.spacing(6) : theme.spacing(6) }}>
          {props.cashout
            ? "Please Review your details"
            : "Let us start by setting up your shop."}
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
                label='Aadhar Card Number'
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
                  pattern: {
                    value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                    message: "Invalid Aadhar number ",
                  },
                })}
                error={Boolean(errors.aadhar)}
                helperText={errors.aadhar?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='GST Number'
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
                  pattern: {
                    value:
                      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                    message: "Invalid GST number",
                  },
                })}
                error={Boolean(errors.GST)}
                helperText={errors.GST?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='PAN Card Number'
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
                  pattern: {
                    value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                    message: "Invalid PAN number",
                  },
                })}
                error={Boolean(errors.PAN)}
                helperText={errors.PAN?.message}
              />
            </Grid>

            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='Account Number'
                name='Acc'
                variant='outlined'
                color='secondary'
                defaultValue={acc}
                onChange={(e) => {
                  setAcc(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter your bank account number'
                inputRef={register({
                  required: "Account number is required",
                  pattern: {
                    value: /^[0-9]{9,18}$/,
                    message: "Invalid Account number",
                  },
                })}
                error={Boolean(errors.Acc)}
                helperText={errors.Acc?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='IFSC Code '
                name='ifsc'
                variant='outlined'
                color='secondary'
                defaultValue={ifsc}
                onChange={(e) => {
                  setIfsc(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter your IFSC code'
                inputRef={register({
                  required: "IFSC code is required",
                  pattern: {
                    value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                    message: "Invalid IFSC code",
                  },
                })}
                error={Boolean(errors.ifsc)}
                helperText={errors.ifsc?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='Beneficiary Name'
                name='accName'
                variant='outlined'
                color='secondary'
                defaultValue={accName}
                onChange={(e) => {
                  setAccName(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter the beneficiary name'
                inputRef={register({
                  required: " Beneficiary name' is required",
                })}
                error={Boolean(errors.accName)}
                helperText={errors.accName?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='Bank Branch'
                name='branch'
                variant='outlined'
                color='secondary'
                defaultValue={branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter your bank branch name'
                inputRef={register({
                  required: "Bank branch is required",
                })}
                error={Boolean(errors.branch)}
                helperText={errors.branch?.message}
              />
            </Grid>
            <Grid container justify='center' item xs={12} md={6}>
              <TextField
                className={classes.input}
                label='UPI ID'
                name='UPI'
                variant='outlined'
                color='secondary'
                defaultValue={UPI}
                onChange={(e) => {
                  setUPI(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter your UPI ID'
                inputRef={register({
                  required: "UPI ID is required",
                  pattern: {
                    value: /^[\w.-]+@[\w.-]+$/,
                    message: "Invalid UPI ID",
                  },
                })}
                error={Boolean(errors.UPI)}
                helperText={errors.UPI?.message}
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
          {!props.cashout ? (
            <Grid
              item
              container
              style={{}}
              justify={md ? "flex-end" : "space-between"}>
              <Button
                // component={Link}
                // to='artist/dashboard'
                onClick={() => {
                  var data2 = JSON.stringify({ is_first_login: false });
                  patchUsrDetails(
                    data2,
                    setLoading,
                    setSnackbar,
                    history,
                    "/artist/dashboard",
                  );
                }}
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
          ) : (
            <Grid item container style={{}} justify={"flex-end"}>
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
                <Typography variant='h5'>Cashout</Typography>
              </Button>
            </Grid>
          )}
        </form>
      </Grid>
    </>
  );
};

export default Page3;
