import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { UIContext } from "../Context/UIContext";
import { Typography } from "@material-ui/core";
import { AlertTitle } from "@material-ui/lab";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  icon: { fontSize: "24px" },
  cross: { alignItems: "start" },
  // message: { paddingTop: "5px" },
}));

export default function Notif(props) {
  const { snackbar, setSnackbar } = useContext(UIContext);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ value: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={snackbar.value}
      autoHideDuration={6000}
      onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={snackbar.type}
        classes={{
          icon: classes.icon,
          message: classes.message,
          action: classes.cross,
        }}>
        <AlertTitle>
          <Typography variant='h5' style={{ textTransform: "capitalize" }}>
            {snackbar.type}
          </Typography>
        </AlertTitle>
        <Typography variant='h6'>{snackbar.message}</Typography>
      </Alert>
    </Snackbar>
  );
}
