import React, { useState } from "react";

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
import { Button } from "@material-ui/core";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

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
        <ListItem button>
          <DashboardIcon
            fontSize='large'
            style={{
              marginRight: theme.spacing(2),
              marginLeft: theme.spacing(1),
            }}
          />

          <Typography> Dashboard</Typography>
        </ListItem>
        <ListItem button>
          <ArtTrackIcon
            fontSize='large'
            style={{
              marginRight: theme.spacing(2),
              marginLeft: theme.spacing(1),
            }}
          />

          <Typography>My products</Typography>
        </ListItem>
        <ListItem button>
          <DirectionsBikeIcon
            fontSize='large'
            style={{
              marginRight: theme.spacing(2),
              marginLeft: theme.spacing(1),
            }}
          />

          <Typography>Track products</Typography>
        </ListItem>

        <ListItem button>
          <QuestionAnswerIcon
            fontSize='large'
            style={{
              marginRight: theme.spacing(2),
              marginLeft: theme.spacing(1),
            }}
          />

          <Typography>FAQs</Typography>
        </ListItem>
        <ListItem button>
          <ContactSupportIcon
            fontSize='large'
            style={{
              marginRight: theme.spacing(2),
              marginLeft: theme.spacing(1),
            }}
          />

          <Typography>Need help?</Typography>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export const ArtistDrawerSM = () => {
  const [drawer, setDrawer] = useState(true);
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
          padding: theme.spacing(0.5),
          fontSize: "60px",
          width: "100%",
          zIndex: "1100",
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
          <ListItem button>
            <DashboardIcon
              fontSize='large'
              style={{
                marginRight: theme.spacing(2),
                marginLeft: theme.spacing(1),
              }}
            />

            <Typography> Dashboard</Typography>
          </ListItem>
          <ListItem button>
            <ArtTrackIcon
              fontSize='large'
              style={{
                marginRight: theme.spacing(2),
                marginLeft: theme.spacing(1),
              }}
            />

            <Typography>My products</Typography>
          </ListItem>
          <ListItem button>
            <DirectionsBikeIcon
              fontSize='large'
              style={{
                marginRight: theme.spacing(2),
                marginLeft: theme.spacing(1),
              }}
            />

            <Typography>Track products</Typography>
          </ListItem>

          <ListItem button>
            <QuestionAnswerIcon
              fontSize='large'
              style={{
                marginRight: theme.spacing(2),
                marginLeft: theme.spacing(1),
              }}
            />

            <Typography>FAQs</Typography>
          </ListItem>
          <ListItem button>
            <ContactSupportIcon
              fontSize='large'
              style={{
                marginRight: theme.spacing(2),
                marginLeft: theme.spacing(1),
              }}
            />

            <Typography>Need help?</Typography>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
