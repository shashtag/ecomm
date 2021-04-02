import React, { useContext } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { UIContext } from "../Context/UIContext";
import { Grid, useMediaQuery } from "@material-ui/core";
import DashboardCards from "../components/ArtistDashboard/DashboardCards";
import {
  ArtistDrawer,
  ArtistDrawerSM,
} from "../components/ArtistDashboard/ArtistDrawer";
import TopListings from "../components/ArtistDashboard/TopListings";
import UploadProduct from "../components/ArtistDashboard/UploadProduct";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const ArtistDashboard = () => {
  const classes = useStyles();
  const { usrBaseInfo } = useContext(UIContext);
  const theme = useTheme();
  let { path } = useRouteMatch();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <CssBaseline />
      {md ? <ArtistDrawer /> : <ArtistDrawerSM />}
      <main className={classes.content}>
        <Switch>
          <Route
            exact
            path={path}
            render={() => (
              <>
                <Grid container direction='column'>
                  <Grid item style={{ marginBottom: theme.spacing(3) }}>
                    <Typography variant='body1' style={{}}>
                      <span style={{ fontWeight: "400" }}>Welcome aborad</span>{" "}
                      {usrBaseInfo?.full_name?.split(" ")[0]},
                    </Typography>
                  </Grid>
                  <Grid container item spacing={2}>
                    <Grid container item md={7}>
                      <DashboardCards />
                      <TopListings />
                    </Grid>
                    <Grid item md={5}>
                      <UploadProduct />
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          />
          <Route exact path={`${path}/myProducts`}></Route>
          <Route exact path={`${path}/trackProducts`}></Route>
          <Route exact path={`${path}/faq`}></Route>
          <Route exact path={`${path}/help`}></Route>
        </Switch>
      </main>
    </div>
  );
};

export default ArtistDashboard;
