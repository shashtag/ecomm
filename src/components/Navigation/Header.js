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
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import facebook from "../../assets/socialIcons/facebook.png";
import instagram from "../../assets/socialIcons/instagram.png";
import linkedIn from "../../assets/socialIcons/LinkedIn.png";
// import mail from "../assets/socialIcons/mail.png";
import twitter from "../../assets/socialIcons/Twitter.png";
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
import sellDes from "../../assets/sellDes.png";
import { UIContext } from "../../Context/UIContext";
import HeaderIcons from "./HeaderIcons";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CreateIcon from "@material-ui/icons/Create";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../API/Post";
import SearchIcon from "@material-ui/icons/Search";

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
    marginLeft: theme.spacing(4),
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
  icon: {
    padding: theme.spacing(1.5, 1.25, 1, 1.25),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [drawer, setDrawer] = useState(false);
  const {
    setLoading,
    setUsrBaseInfo,
    setToken,
    search,
    setSearch,
  } = useContext(UIContext);

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
        elevation={1}
        style={{
          paddingTop: "8px",
          borderBottom: `0.5px solid ${theme.palette.grey[300]}`,
        }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex" }} className={classes.grow2}>
            <Link to='/'>
              <img
                height='50px'
                widht='81.71px'
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
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <IconButton
                component={Link}
                to={`/search/${search}`}
                aria-label='cart'
                style={{
                  // height: "0.75rem",
                  // width: "20px",
                  borderRadius: "0 4px 4px 0",
                  background: theme.palette.secondary.main,
                }}>
                <SearchIcon
                  style={{
                    color: "white",
                  }}
                />
              </IconButton>
              {/* <img
                  style={{ position: "absolute", right: 0, cursor: "pointer" }}
                  src={search}
                  alt='search'
                  height='100%'
                /> */}
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
                <List>
                  <ListItem>
                    <Link to='/'>
                      <img
                        height='50px'
                        widht='81.71px'
                        src={
                          // md ?
                          logoMain
                          // : logoMainSm
                        }
                        alt='kalafax logo'
                      />
                    </Link>
                  </ListItem>
                  {!token ? (
                    <>
                      <ListItem component={Link} to='/login'>
                        <LockOpenIcon
                          style={{
                            color: theme.palette.secondary.main,
                            fontSize: "20px",
                          }}
                        />
                        {"  "}
                        <Typography variant='h5' style={{ color: "#152238" }}>
                          Login/Signup
                        </Typography>
                      </ListItem>
                    </>
                  ) : null}
                  {usrBaseInfo?.is_artist ? (
                    <ListItem component={Link} to='/artist/dashboard'>
                      <DashboardOutlinedIcon
                        style={{
                          color: theme.palette.secondary.main,
                          fontSize: "20px",
                        }}
                      />
                      {"  "}
                      <Typography variant='h5' style={{ color: "#152238" }}>
                        Dashboard
                      </Typography>
                    </ListItem>
                  ) : null}
                  <ListItem component={Link} to='/user/cart'>
                    <ShoppingCartOutlinedIcon
                      style={{
                        color: theme.palette.secondary.main,
                        fontSize: "20px",
                      }}
                    />
                    {"  "}
                    <Typography variant='h5' style={{ color: "#152238" }}>
                      Cart
                    </Typography>
                  </ListItem>
                  {token ? (
                    <ListItem
                      component={Link}
                      onClick={() => {
                        logout(
                          setLoading,
                          setUsrBaseInfo,
                          setToken,
                          props.history,
                        );
                      }}>
                      <ExitToAppIcon
                        style={{
                          color: theme.palette.secondary.main,
                          fontSize: "20px",
                        }}
                      />
                      {"  "}
                      <Typography variant='h5' style={{ color: "#152238" }}>
                        Logout
                      </Typography>
                    </ListItem>
                  ) : null}
                </List>

                <Divider style={{ height: "10px" }} />

                <List>
                  <ListItem>
                    <Typography variant='h4'>Popular Categories</Typography>
                  </ListItem>

                  <ListItem button component={Link} to='Paintings & Artwork'>
                    <Typography variant='h6'>Paintings & Artwork</Typography>
                  </ListItem>
                  <ListItem button component={Link} to='Lifestyle & Home'>
                    <Typography variant='h6'>Lifestyle & Home</Typography>
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='Jewellery & Accessories'>
                    <Typography variant='h6'>
                      Jewellery & Accessories
                    </Typography>
                  </ListItem>
                  <ListItem button component={Link} to='Collectibles'>
                    <Typography variant='h6'>Collectibles</Typography>
                  </ListItem>
                </List>
                <Divider style={{ height: "10px" }} />
                <List>
                  <ListItem button component={Link} to='about'>
                    <Typography variant='h6'>About Us</Typography>
                  </ListItem>
                  <ListItem
                    button
                    component='a'
                    href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/DISCLAIMER.pdf'
                    target='_blank'>
                    <Typography variant='h6'>Disclaimer</Typography>
                  </ListItem>
                  <ListItem
                    button
                    component='a'
                    href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/PRIVACY+NOTICE.pdf'
                    target='_blank'>
                    <Typography variant='h6'>Privacy</Typography>
                  </ListItem>
                  <ListItem
                    button
                    component='a'
                    href='https://kalafex-docs.s3.ap-south-1.amazonaws.com/RETURN+POLICY.pdf'
                    target='_blank'>
                    <Typography variant='h6'>Returns</Typography>
                  </ListItem>
                  <ListItem button component={Link} to='/contact'>
                    <Typography variant='h6'>Contact Us</Typography>
                  </ListItem>
                  <ListItem button component={Link} to='/user/trackOrder'>
                    <Typography variant='h6'>Track My Order</Typography>
                  </ListItem>
                </List>
                <Divider style={{ height: "10px" }} />
                <div
                  style={{ display: "flex", marginLeft: theme.spacing(0.75) }}>
                  <div className={classes.icon}>
                    <a
                      width='100%'
                      height='100%'
                      href='https://www.instagram.com/kalafex_/'
                      rel='noreferrer'
                      target='_blank'>
                      <img src={instagram} alt='instagram icon' />
                    </a>
                  </div>
                  <div className={classes.icon}>
                    <a
                      width='100%'
                      height='100%'
                      href='https://www.facebook.com/kalafex/'
                      rel='noreferrer'
                      target='_blank'>
                      <img src={facebook} alt='facebook icon' />
                    </a>
                  </div>
                  <div className={classes.icon}>
                    <a
                      width='100%'
                      height='100%'
                      href='https://twitter.com/kalafex_'
                      rel='noreferrer'
                      target='_blank'>
                      <img src={twitter} alt='twitter icon' />
                    </a>
                  </div>

                  <div className={classes.icon}>
                    <a
                      href='https://www.linkedin.com/company/kalafex/'
                      rel='noreferrer'
                      target='_blank'>
                      <img
                        width='100%'
                        height='31px'
                        src={linkedIn}
                        alt='linkedIn icon'
                      />
                    </a>
                  </div>
                  {/* <div className={classes.icon}>
              <img src={mail} alt='mail icon' />
            </div> */}
                </div>
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
