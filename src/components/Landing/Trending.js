import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import Product from "../Product";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 15px",
    marginTop: "150px",
    [theme.breakpoints.up("md")]: {
      padding: "0 3.2%",
    },
  },
}));

const Trending = () => {
  const classes = useStyles();
  const theme = useTheme();
  const res = ["sdsd", "sdsd", "sdsd", "sdsd"];
  const trending = res.map((key, i) => <Product key={i} />);
  return (
    <>
      <Grid container spacing={4} direction='column' className={classes.root}>
        <Grid item container>
          <Grid item>
            <Typography variant='h5'>Trending Designs this week</Typography>
          </Grid>
          <div style={{ flexGrow: 1 }}></div>
          <Grid item>
            <Typography variant='h6' color='secondary'>
              View more
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify='center' spacing={2}>
          {trending}
        </Grid>
      </Grid>
    </>
  );
};

export default Trending;
