import React, { useContext } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading = () => {
  const classes = useStyles();
  const { loading } = useContext(UIContext);

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default Loading;
