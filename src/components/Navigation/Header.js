import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  fade,
  makeStyles,
  Typography,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
// import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {
  // PersonOutline,
  Menu,
} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
// import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import logoMain from "../../assets/logoMain.png";
import logoDrawer from "../../assets/logoDrawer.png";
// import logoMainSm from "../../assets/logoMainSm.png";
import search from "../../assets/search.png";
import sellDes from "../../assets/sellDes.png";
import { UIContext } from "../../Context/UIContext";
import HeaderIcons from "./HeaderIcons";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  grow2: {
    flexGrow: 4,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: `1px ${theme.palette.secondary.main} solid`,
    display: "flex",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: theme.spacing(0.5),
    height: "36px",
    width: "100%",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },

  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    ...theme.typography.caption,
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    // marginLeft: theme.spacing(2),
    width: "100%",
    "&::placeholder": {
      color: theme.palette.secondary.light,
    },
  },
  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  location: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (md) {
      window.addEventListener("resize", () => setDrawer(false));
    }
    return () => {};
  }, [md]);

  const { token, usrBaseInfo } = useContext(UIContext);
  // useEffect(() => {
  //   // name = usrBaseInfo?.full_name;
  //   console.log(usrBaseInfo);
  // }, [usrBaseInfo]);
  const desktop = token ? (
    <div
      style={{ justifyContent: "flex-end" }}
      className={[classes.sectionDesktop, classes.grow].join(" ")}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className={classes.grow}>
        {/* <Button component={Link} to='/'>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            How we work
          </Typography>

          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </Button> */}
      </div>
      <Typography
        variant='h6'
        color='secondary'
        style={{ fontWeight: "600", marginRight: theme.spacing(2) }}>
        <span style={{ fontWeight: "500" }}>Hello</span>{" "}
        {usrBaseInfo?.full_name?.split(" ")[0]}
      </Typography>
      <HeaderIcons />
    </div>
  ) : (
    <div
      style={{ justifyContent: "flex-end" }}
      className={[classes.sectionDesktop, classes.grow].join(" ")}>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className={classes.grow}>
        <Button component={Link} to='/'>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            How we work
          </Typography>

          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </Button>
      </div> */}
      <Button
        component={Link}
        to='/artist/signup'
        style={{
          marginRight: theme.spacing(0.5),
          padding: theme.spacing(1.3),
        }}>
        {/* <Link to='/artist/signup'> */}
        <img src={sellDes} alt='kalafax logo' />
        {/* </Link> */}
      </Button>
      <div
        style={{
          borderRight: `2px ${theme.palette.secondary.main} solid`,
          marginRight: theme.spacing(1.5),
          height: "36px",
        }}
      />
      <Button
        component={Link}
        to='/login'
        variant='contained'
        size='large'
        color='secondary'>
        <Typography variant='h6'>Login/Signup</Typography>
      </Button>
      <IconButton aria-label='cart' style={{ marginLeft: theme.spacing(2) }}>
        <ShoppingCartOutlinedIcon
          style={{
            color: theme.palette.secondary.main,
          }}
        />
      </IconButton>
    </div>
  );

  return (
    <>
      <AppBar
        position='static'
        style={{
          paddingTop: "8px",
          borderBottom: `1px solid ${theme.palette.grey[300]}`,
        }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex" }} className={classes.grow2}>
            <Link to='/'>
              <img
                src={
                  // md ?
                  logoMain
                  // : logoMainSm
                }
                alt='kalafax logo'
              />
            </Link>
            {/* <div className={classes.location}>
              <RoomOutlinedIcon
                style={{ color: theme.palette.secondary.main }}
              />
              <div
                style={{
                  fontFamily: "Lato",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: theme.palette.secondary.main,
                  whiteSpace: "nowrap",
                }}>
                Select your address for
              </div>
              <div
                style={{
                  fontFamily: "Lato",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: theme.palette.secondary.main,
                  whiteSpace: "nowrap",
                }}>
                hassle free shopping
              </div>
            </div> */}

            <div className={classes.search}>
              <InputBase
                placeholder='Try "handmade mugs"'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <div>
                <img
                  style={{ position: "absolute", right: 0, cursor: "pointer" }}
                  src={search}
                  alt='search'
                  height='100%'
                />
              </div>
            </div>
          </div>
          {/* <div className={classes.grow} /> */}
          {desktop}
          <div className={classes.sectionMobile}>
            <IconButton
              edge='end'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => setDrawer(true)}>
              <Menu />
            </IconButton>
            <Drawer
              anchor='right'
              open={drawer}
              onClose={() => setDrawer(false)}>
              <div
                style={{ width: "275px" }}
                role='presentation'
                onClick={() => setDrawer(false)}
                onKeyDown={() => setDrawer(false)}>
                <div
                  style={{
                    margin: theme.spacing(3, 0),
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}>
                  <img src={logoDrawer} alt='kalafex logo' />
                </div>
                <List>
                  <ListItem>
                    <Typography variant='h3'>
                      <span style={{ fontWeight: 400 }}>Hello</span>{" "}
                      {usrBaseInfo?.full_name?.split(" ")[0]} 👋
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <HeaderIcons />
                  </ListItem>
                  {!token ? (
                    <>
                      <ListItem>
                        <Button
                          component={Link}
                          to='/artist/signup'
                          style={{
                            padding: theme.spacing(1.3),
                          }}>
                          {/* <Link to='/artist/signup'> */}
                          <img src={sellDes} alt='kalafax logo' />
                          {/* </Link> */}
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button
                          component={Link}
                          to='/login'
                          variant='contained'
                          size='large'
                          color='secondary'>
                          <Typography variant='h6'>Login/Signup</Typography>
                        </Button>
                      </ListItem>
                    </>
                  ) : null}
                  <ListItem button>
                    <Typography variant='h6'>Paintings & Artwork</Typography>
                  </ListItem>
                  <ListItem button>
                    <Typography variant='h6'>Lifestyle & Home</Typography>
                  </ListItem>
                  <ListItem button>
                    <Typography variant='h6'>
                      Jewellery & Accessories
                    </Typography>
                  </ListItem>
                  <ListItem button>
                    <Typography variant='h6'>Collectibles</Typography>
                  </ListItem>
                </List>
                <Divider />
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
