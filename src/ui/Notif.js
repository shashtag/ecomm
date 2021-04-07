import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { UIContext } from "../Context/UIContext";
import { Typography } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  icon: { fontSize: "24px" },
  message: { paddingTop: "5px" },
}));

export default function Notif(props) {
  const { snackbar, setSnackbar } = useContext(UIContext);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={snackbar}
      autoHideDuration={6000}
      onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity='error'
        classes={{ icon: classes.icon, message: classes.message }}>
        <Typography variant='h5'>Request failed please try again</Typography>
      </Alert>
    </Snackbar>
  );
}
