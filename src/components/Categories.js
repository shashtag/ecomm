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

const useStyles = makeStyles((theme) => ({}));

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
      <Toolbar style={{ minHeight: "48px " }}></Toolbar>
    </AppBar>
  );
};

export default Categories;
