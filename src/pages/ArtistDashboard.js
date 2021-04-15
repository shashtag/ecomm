import React, { useContext, useEffect } from "react";

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
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import bannerImg from "../assets/bannerImg.png";
import { Avatar } from "@material-ui/core";
import { ADashboardProvider } from "../Context/ADashboardContext";
import ArtistProfile from "./ArtistProfile";
import Help from "./Help";

// const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: `${theme.spacing(4)}px 15px`,
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(4)}px 3.2%`,
    },
  },
}));
const ArtistDashboard = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { usrBaseInfo, token } = useContext(UIContext);
  const theme = useTheme();
  let { path } = useRouteMatch();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  if (!localStorage.getItem("Token")) {
    history.push("/login");
  }
  if (!token) {
    return <div></div>;
  }

  return (
    <ADashboardProvider>
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
                      <Grid item xs={12} md={5}>
                        <UploadProduct />
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            />
            <Route
              path={`${path}/myPage`}
              render={() => (
                <Grid container direction='column'>
                  <Grid
                    item
                    container
                    style={{
                      background: `url(${bannerImg}) center center / cover no-repeat `,
                    }}
                    xs='12'>
                    <div style={{ height: "30vh" }}></div>
                  </Grid>
                  <Avatar></Avatar>
                </Grid>
              )}
            />
            <Route path={`${path}/profile`}>
              <ArtistProfile />
            </Route>
            <Route path={`${path}/track`}>dasdsdf</Route>
            <Route path={`${path}/faq`}>dadda</Route>
            <Route path={`${path}/help`}>
              <Help standalone={false} />
            </Route>
          </Switch>
        </main>
      </div>
    </ADashboardProvider>
  );
};

export default ArtistDashboard;
