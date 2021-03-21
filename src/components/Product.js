import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Product = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='210'
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          />
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant='body2' component='h2'>
              canvas
            </Typography>
            <Typography gutterBottom variant='body1' component='h2'>
              Lizard
            </Typography>
            <Typography gutterBottom variant='body2' component='h2'>
              by sdjasdjk
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small' color='secondary'>
              Share
            </Button>
            <Button size='small' color='secondary'>
              Learn More
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
