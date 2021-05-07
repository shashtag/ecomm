import React from "react";
import {
  Button,
  Fade,
  makeStyles,
  Modal,
  Typography,
  useTheme,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Page3 from "../ArtistProfile/Page3";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none !important",
    overflow: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
    maxWidth: "80vw",
    overflow: "scroll",
    maxHeight: "80vh",
    "&:focus-visible": {
      outline: "none !important",
    },
  },
}));

const CashoutBttn = () => {
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
      <Typography variant='h6' style={{ marginTop: theme.spacing(5) }}>
        Cashout
      </Typography>
      <Button
        onClick={handleOpen}
        variant='outlined'
        size='large'
        color='secondary'
        style={{
          marginTop: theme.spacing(2),
          border: "2px solid #6FCF97",
          width: "100%",
          padding: "16px 24px",
        }}>
        Make a Cashout Request
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Page3 cashout={true} oppFunc={setOpen} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default CashoutBttn;
