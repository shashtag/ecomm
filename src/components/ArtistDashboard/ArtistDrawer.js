import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { makeStyles, Typography } from "@material-ui/core";
import theme from "../../ui/Theme";
// import { Button } from "@material-ui/core";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import PersonIcon from "@material-ui/icons/Person";
import { UIContext } from "../../Context/UIContext";
import { ADashboardContext } from "../../Context/ADashboardContext";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // top: "73px",
    backgroundColor: "#40567A",
    minHeight: "100vh",

    position: "static",
  },
  drawerPaperSM: {
    backgroundColor: "#40567A",
  },
}));

export const ArtistDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'>
      <List style={{ color: "white" }}>
        <ArtistDrawerIcons />
      </List>
      <Divider />
    </Drawer>
  );
};

export const ArtistDrawerSM = () => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  return (
    <>
      <OpenInBrowserIcon
        onClick={() => setDrawer(true)}
        style={{
          background: "#40567A",
          color: "white",
          position: "fixed",
          bottom: "-1px",
          padding: theme.spacing(0.5, 0),
          fontSize: "48px",
          left: "15px",
          zIndex: "1100",
          borderRadius: "4px",
        }}
      />
      <Drawer
        anchor='bottom'
        open={drawer}
        onClose={() => setDrawer(false)}
        classes={{
          paper: classes.drawerPaperSM,
        }}>
        <List style={{ color: "white" }}>
          <ArtistDrawerIcons />
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

const ArtistDrawerIcons = () => {
  const { setLoading } = useContext(UIContext);
  const { insights } = useContext(ADashboardContext);
  const [url, setUrl] = useState("");
  console.log(insights);
  // useEffect(() => {
  //   setUrl(insights.name);
  //   return () => {};
  // }, []);
  return (
    <>
      <ListItem button component={Link} to='/artist/dashboard/'>
        <DashboardIcon
          fontSize='large'
          style={{
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
          }}
        />

        <Typography> Dashboard</Typography>
      </ListItem>
      <ListItem button component={Link} to='/artist/dashboard/profile'>
        <PersonIcon
          fontSize='large'
          style={{
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
          }}
        />

        <Typography> MY Profile</Typography>
      </ListItem>
      <ListItem
        button
        component={Link}
        to={`/artist/dashboard/${insights?.details?.custom_url}`}>
        <ArtTrackIcon
          fontSize='large'
          style={{
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
          }}
        />

        <Typography>My page</Typography>
      </ListItem>
      <ListItem button component={Link} to='/artist/dashboard/track'>
        <DirectionsBikeIcon
          fontSize='large'
          style={{
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
          }}
        />

        <Typography>Track products</Typography>
      </ListItem>

      <ListItem button component={Link} to='/artist/dashboard/faq'>
        <QuestionAnswerIcon
          fontSize='large'
          style={{
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
          }}
        />

        <Typography>FAQs</Typography>
      </ListItem>
      <ListItem button component={Link} to='/artist/dashboard/help'>
        <ContactSupportIcon
          fontSize='large'
          style={{
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(1),
          }}
        />

        <Typography>Need help?</Typography>
      </ListItem>
    </>
  );
};
