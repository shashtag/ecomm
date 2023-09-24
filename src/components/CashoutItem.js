import {
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { grantCashout } from "../API/Post";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  media: {
    aspectRatio: "3/4",
    filter: "drop-shadow(1.18902px 4.7561px 17.8354px rgba(58, 58, 58, 0.15))",
    backgroundSize: "contain",
  },
  icon: {
    position: "absolute",
    top: "0px",
    right: "10px",
  },
}));

const CashoutItem = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { setLoading, setSnackbar } = useContext(UIContext);

  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container item xs={12}>
      <Card
        style={{
          width: "100%",
          padding: theme.spacing(2),
          borderRadius: "0",
          boxShadow: "2px 6px 20px rgba(58, 58, 58, 0.15)",
        }}>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <CardMedia
              component='img'
              loading='lazy'
              height='auto'
              width=' 100%'
              className={classes.media}
              image={props.img}
              title='Paella dish'
            />
          </Grid>
          <Grid item md={10}>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                style={{ marginBottom: theme.spacing(3) }}>
                {props.name}
              </Typography>
            </Grid>
            <Grid
              container
              spacing={1}
              style={{ marginBottom: theme.spacing(2) }}>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Custom URL
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.customUrl}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Email ID
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.email}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Phone Number
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.phone}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Beneficiary Name
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.accName}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              style={{ marginBottom: theme.spacing(2) }}>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Aadhar Number
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.aadhar}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Balance
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.balance}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Account Name
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.accName}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Account Number
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.accNo}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  GSt Number
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.gstNo}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  IFSC Code
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.ifsc}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Pan Card Number
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.pan}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  UPI ID
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.upi}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify='flex-end'>
            <Button
              // component={Link}
              // to='/artist/signup'
              onClick={() => {
                const data = JSON.stringify({
                  user: props.id,
                });
                grantCashout(data, setLoading, setSnackbar);
              }}
              variant='contained'
              size='large'
              color='secondary'
              type='submit'
              style={{
                marginTop: theme.spacing(1),
                padding: "16px 24px",
              }}>
              <Typography variant='h5'>Cashout Granted</Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CashoutItem;
