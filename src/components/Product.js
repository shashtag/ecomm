import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Card,
  // CardActions,
  CardContent,
  CardMedia,
  // IconButton,
} from "@material-ui/core";
// import { Favorite, Share } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
// import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: "150px",
    backgroundSize: "contain",
    paddingTop: "56.25%", // 16:9
  },
}));

const Product = (props) => {
  const classes = useStyles();
  // const theme = useTheme();
  const history = useHistory();

  const cardClickHandler = () => {
    history.push(`/product/${props.pid}`);
  };

  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card className={classes.root} onClick={cardClickHandler}>
        <CardMedia
          className={classes.media}
          image={props?.img}
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='h5' color='textSecondary' component='p'>
            {props?.name}
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Favorite />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Product;
