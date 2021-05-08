import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { fetchAddress } from "../API/Get";
import { OrderContext } from "../Context/OrderContext";
import { UIContext } from "../Context/UIContext";
import Address from "../ui/Address";
import NewAddress from "../ui/NewAddress";
import { Link } from "react-router-dom";
import { createRazorpayPayment } from "../API/Post";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(6)}px 3.2%`,
    },
  },
}));

const SelectAddress = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const { setLoading, usrAdresses, setUsrAdresses, usrBaseInfo } = useContext(
    UIContext,
  );
  const {
    selectedItems,
    setSelectedItems,
    lastProductAdded,
    setLastProductAdded,
    order,
    razorPay,
    setRazorPay,
  } = useContext(OrderContext);

  useEffect(() => {
    if (!usrAdresses) {
      fetchAddress(setLoading, setUsrAdresses);
    }
    return () => {
      setLastProductAdded(false);
    };
  }, []);

  if (selectedItems.length === 0) {
    return <Redirect to='/cart' />;
  }
  // console.log(order);

  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item xs={12}>
        <Typography variant='h3' style={{ marginBottom: theme.spacing(4) }}>
          Select a delivery address
        </Typography>
      </Grid>

      <Grid container item spacing={8}>
        {usrAdresses
          ? usrAdresses?.map((data, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <Address
                    select={true}
                    name={usrBaseInfo?.full_name}
                    id={data.a_id}
                    city={data.city}
                    pincode={data.pin_code}
                    state={data.state}
                    street={data.street}
                  />
                </Grid>
              );
            })
          : null}

        <Grid item xs={12} sm={6} md={4}>
          <NewAddress />
        </Grid>
      </Grid>
      <Grid item>
        <Button
          disabled={!lastProductAdded}
          // component={Link}
          // to='/'
          onClick={() => {
            const data = { order: order.details.o_id };
            createRazorpayPayment(data, setLoading, setRazorPay, history);
          }}
          variant='contained'
          size='large'
          color='secondary'
          type='submit'
          style={{
            ...theme.palette.background.gradient,
            width: "100%",
            marginTop: theme.spacing(5),
            padding: "16px 24px",
          }}>
          <Typography variant='h5'>Proceed to Payment</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectAddress;
