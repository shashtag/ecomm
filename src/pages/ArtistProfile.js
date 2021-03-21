import React, { useState, useContext } from "react";
import Logo from "../ui/Logo";

import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import Page1 from "../components/ArtistProfile/Page1";
import Page2 from "../components/ArtistProfile/Page2";
import Page3 from "../components/ArtistProfile/Page3";
import { APProvider } from "../Context/APContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(4)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(4)}px 3.2%`,
    },
  },
}));

const ArtistProfile = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(1);
  return (
    <APProvider>
      <Grid container direction='column' className={classes.root}>
        <Logo />
        {page === 1 ? (
          <Page1 page={page} setPage={setPage} />
        ) : page === 2 ? (
          <Page2 page={page} setPage={setPage} />
        ) : (
          <Page3 page={page} setPage={setPage} />
        )}
      </Grid>
    </APProvider>
  );
};

export default ArtistProfile;
