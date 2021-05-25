import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  // fade,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";

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

  const cat = [
    {
      value: "Paintings & Artwork",
      url: "search/Paintings & Artwork",
      // subCat: [
      //   { value: "Earrings" },
      //   { value: "Necklaces" },
      //   { value: "Jewellery" },
      // ],
    },
    {
      value: "Clothing",
      url: "search/Clothing",
      // subCat: [{ value: "Coasters" }],
    },
    {
      value: "Lifestyle & Home",
      url: "search/Lifestyle & Home",
      // subCat: [{ value: "Posters" }, { value: "Apparel " }],
    },
    {
      value: "Collectibles",
      url: "search/Collectibles",

      // subCat: [{ value: "Pottery" }],
    },
    {
      value: "Jewellery & Accessories",
      url: "search/Jewellery & Accessories",
      // subCat: [{ value: "Canvas" }, { value: "Paper" }],
    },
  ].map((cate, key) => (
    <div className={classes.category} key={key}>
      <Button component={Link} to={`/${cate.url}`}>
        <Typography
          variant='h6'
          color='secondary'
          noWrap
          style={{ fontWeight: "600" }}>
          {cate.value}
        </Typography>
        {/* <ArrowDropDownSharpIcon style={{ color: theme.palette.secondary.main }} /> */}
      </Button>
    </div>
  ));

  return (
    <AppBar
      position='static'
      style={{
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      }}>
      <Toolbar style={{ minHeight: "48px ", justifyContent: "center" }}>
        {cat}
      </Toolbar>
    </AppBar>
  );
};

export default Categories;
