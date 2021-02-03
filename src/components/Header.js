import React from "react";
import {
  AppBar,
  fade,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InputBase from "@material-ui/core/InputBase";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import logoMain from "../assets/logoMain.png";
import search from "../assets/search.png";
import sellDes from "../assets/sellDes.png";

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
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    height: "36px",
    width: "100%",
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    ...theme.typography.caption,
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();

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
            <img src={logoMain} alt='kalafax logo' />
            <div className={classes.location}>
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
            </div>

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
                  style={{ position: "absolute", right: 0 }}
                  src={search}
                  alt='search'
                  height='100%'
                />
              </div>
            </div>
          </div>
          {/* <div className={classes.grow} /> */}
          <div
            style={{ justifyContent: "flex-end" }}
            className={[classes.sectionDesktop, classes.grow].join(" ")}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className={classes.grow}>
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
            </div>
            <div style={{ marginTop: "6px", marginRight: theme.spacing(2) }}>
              <img src={sellDes} alt='kalafax logo' />
            </div>
            <div
              style={{
                borderRight: `2px ${theme.palette.secondary.main} solid`,
                marginRight: theme.spacing(2),
                height: "36px",
              }}
            />
            <Button variant='contained' size='medium' color='secondary'>
              <Typography variant='h6'>Login/Signup</Typography>
            </Button>
            <ShoppingCartOutlinedIcon
              style={{
                marginLeft: theme.spacing(2),
                color: theme.palette.secondary.main,
              }}
            />
          </div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
    </>
  );
}
