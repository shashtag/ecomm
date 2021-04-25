import { Grid, Typography, useTheme } from "@material-ui/core";
import React from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none !important",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
    "&:focus-visible": {
      outline: "none !important",
    },
  },
}));

const NewAddress = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <>
      <div
        onClick={handleOpen}
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "300px",
          border: "dashed #40567A 1px",
          padding: theme.spacing(4),
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
          "&:hover": {
            filter: "brightness(200%)",
          },
        }}>
        <AddOutlinedIcon
          style={{
            color: "#787777",
            fontSize: "200px",
            "&:hover": {
              filter: "brightness(200%)",
            },
          }}
        />
        <Typography variant='h5' style={{ color: "#787777" }}>
          Add a new address
        </Typography>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction='column'>
              <Grid item>Add address</Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default NewAddress;
