import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { fetchAddress } from "../API/Get";
import { OrderContext } from "../Context/OrderContext";
import { UIContext } from "../Context/UIContext";
import Address from "../ui/Address";
import NewAddress from "../ui/NewAddress";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(6)}px 3.2%`,
    },
  },
}));

const SelectAddress = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { setLoading, usrAdresses, setUsrAdresses, usrBaseInfo } = useContext(
    UIContext,
  );
  const { selectedItems } = useContext(OrderContext);

  useEffect(() => {
    if (!usrAdresses) {
      fetchAddress(setLoading, setUsrAdresses);
    }
    return () => {};
  }, []);
  if (selectedItems.current.length == 0) {
    return <Redirect to='/cart' />;
  }

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
    </Grid>
  );
};

export default SelectAddress;
