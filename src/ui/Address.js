import { Grid, IconButton, Typography, useTheme } from "@material-ui/core";
import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteAddress } from "../API/Delete";
import { UIContext } from "../Context/UIContext";

const Address = (props) => {
  const theme = useTheme();
  const { setLoading } = useContext(UIContext);
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
          <Typography variant='h5'>{props.pincode}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Address;
