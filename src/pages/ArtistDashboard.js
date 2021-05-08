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
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { ADashboardProvider } from "../Context/ADashboardContext";
import ArtistProfile from "./ArtistProfile";
import Help from "./Help";
import ArtistPage from "./ArtistPage";
import UnderConstruction from "./UnderConstruction";
import AllOrders from "./AllOrders";
import CashoutBttn from "../components/ArtistDashboard/CashoutBttn";

// const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: `${theme.spacing(4)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(4)}px 2%`,
      width: "calc(100vw - 250px)",
    },
  },
}));
const ArtistDashboard = (props) => {
  const classes = useStyles();
  const { usrBaseInfo } = useContext(UIContext);
  const theme = useTheme();
  let { path } = useRouteMatch();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  if (!localStorage.getItem("Token")) {
    return <Redirect to='/login' />;
  }

  return (
    <ADashboardProvider>
      <div className={classes.root}>
        <CssBaseline />
        {md ? <ArtistDrawer /> : <ArtistDrawerSM />}
        <Grid container className={classes.content}>
          <Switch>
            <Route
              exact
              path={path}
              render={() => (
                <>
                  <Grid container direction='column'>
                    <Grid
                      container
                      item
                      style={{ marginBottom: theme.spacing(3) }}>
                      <Typography variant='body1' style={{}}>
                        <span style={{ fontWeight: "400" }}>
                          Welcome aborad
                        </span>{" "}
                        <span style={{ textTransform: "capitalize" }}>
                          {usrBaseInfo?.full_name?.split(" ")[0]},
                        </span>
                      </Typography>
                    </Grid>
                    <Grid container item spacing={2}>
                      <Grid item xs={12} md={7}>
                        <DashboardCards />
                        <TopListings />
                      </Grid>
                      <Grid container item xs={12} md={5}>
                        <Grid item xs={12}>
                          <UploadProduct />
                        </Grid>
                        <Grid item xs={12}>
                          <CashoutBttn />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            />

            <Route path={`${path}/profile`}>
              <ArtistProfile />
            </Route>
            <Route path={`${path}/track`}>
              <AllOrders artist={true} />
            </Route>
            <Route path={`${path}/faq`}>
              <UnderConstruction />
            </Route>
            <Route path={`${path}/help`}>
              <Help standalone={false} />
            </Route>
            <Route
              path={`${path}/:url`}
              render={() => <ArtistPage artist={true} />}
            />
          </Switch>
        </Grid>
      </div>
    </ADashboardProvider>
  );
};

export default ArtistDashboard;
