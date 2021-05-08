import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    aspectRatio: "3/4",

    // height: "70%",
    backgroundSize: "contain",
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const cardClickHandler = () => {
    history.push(`/product/${props.pid}`);
  };

  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card
        className={classes.root}
        onClick={cardClickHandler}
        style={{ cursor: "pointer" }}>
        <CardMedia
          component='img'
          loading='lazy'
          height='auto'
          width='auto'
          className={classes.media}
          image={props?.img}
          // title='Paella dish'
        />
        <CardContent>
          <Typography noWrap variant='h5' color='textSecondary' component='p'>
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
