import React from "react";
import {
  AppBar,
  Toolbar,
  fade,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";

const useStyles = makeStyles((theme) => ({
  category: {
    display: "flex",
    justifyContent: "center",
    padding: "0 1vw",
  },
}));

const Categories = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <AppBar
      position='static'
      style={{
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      }}>
      <Toolbar style={{ minHeight: "48px ", justifyContent: "center" }}>
        <div className={classes.category}>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            Clothing
          </Typography>
          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </div>
        <div className={classes.category}>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            Gifts
          </Typography>
          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </div>
        <div className={classes.category}>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            Stickers
          </Typography>
          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </div>
        <div className={classes.category}>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            Mugs
          </Typography>
          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </div>
        <div className={classes.category}>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            Accessories
          </Typography>
          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </div>
        <div className={classes.category}>
          <Typography
            variant='h6'
            color='secondary'
            noWrap
            style={{ fontWeight: "600" }}>
            Posters
          </Typography>
          <ArrowDropDownSharpIcon
            style={{ color: theme.palette.secondary.main }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Categories;
