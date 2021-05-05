import {
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteAddress } from "../API/Delete";
import { UIContext } from "../Context/UIContext";
import { Link } from "react-router-dom";
import { createOrder } from "../API/Post";
import { OrderContext } from "../Context/OrderContext";

const Address = (props) => {
  const theme = useTheme();
  const { setLoading, setSnackbar } = useContext(UIContext);
  const { order, setOrder } = useContext(OrderContext);

  const handleCreateOrder = () => {
    const data = { shipping_address: props.id };
    createOrder(data, setLoading, setSnackbar, setOrder);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "300px",
        border: "dashed #40567A 1px",
        padding: theme.spacing(4),
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}>
      <IconButton
        onClick={() => {
          deleteAddress(props.id, setLoading);
        }}
        style={{
          marginLeft: theme.spacing(2),
          position: "absolute",
          top: "20px",
          right: "20px",
        }}>
        <DeleteIcon
          style={{
            color: theme.palette.error.main,
          }}
        />
      </IconButton>
      <Grid container direction='column'>
        <Grid item>
          <Typography variant='h3' style={{ marginBottom: theme.spacing(1) }}>
            {props.name}
          </Typography>
        </Grid>
        {props.type === "Pickup" ? (
          <Grid item>
            <Typography variant='h5'>Pickup From</Typography>
          </Grid>
        ) : (
          <Grid item>
            <Typography variant='h5'>Ship to</Typography>
          </Grid>
        )}
        <Grid item>
          <Typography variant='h5'>{props.street}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>{props.city}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>{props.state}</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ marginBottom: theme.spacing(2) }} variant='h5'>
            {props.pincode}
          </Typography>
        </Grid>
        <Grid item>
          {props.select ? (
            <Button
              onClick={handleCreateOrder}
              // component={Link}
              // to='/selectAddress'
              variant='contained'
              size='large'
              color='secondary'
              type='submit'
              style={{
                // width: "100%",
                marginTop: theme.spacing(1),
                padding: "16px 24px",
              }}>
              <Typography variant='h5'>Deliver here</Typography>
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default Address;
