import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchOrderDetailsFinally } from "../API/Get";
import orderProcessing from "../assets/orderProcessing.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    aspectRatio: "3/4",
    filter: "drop-shadow(1.18902px 4.7561px 17.8354px rgba(58, 58, 58, 0.15))",
    backgroundSize: "contain",
  },
}));

const OrderItem = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [expand, setExpand] = useState(false);

  const handleChange = () => {
    setExpand(!expand);
  };

  console.log(props.prods);

  return (
    <Grid item xs={12} style={{ margin: theme.spacing(2) }}>
      <Accordion
        expanded={expand}
        onChange={handleChange}
        style={{ padding: theme.spacing(4) }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container direction='row' spacing={2}>
            <Grid container justify='center' item md={2}>
              {/* <CardMedia
              component='img'
              loading='lazy'
              height='auto'
              width=' 100%'
              className={classes.media}
              image={LocalMallIcon}
              title='Paella dish'
            /> */}
              <LocalMallIcon style={{ fontSize: "100px" }} />
            </Grid>
            <Grid container item md={10}>
              <Grid container item xs={12}>
                <Grid item xs={4}>
                  <Typography variant='h6' align='center'>
                    Order number
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='h6' align='center'>
                    Status
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='h6' align='center'>
                    Order date
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                style={{ marginBottom: theme.spacing(6) }}>
                <Grid item xs={4}>
                  <Typography variant='h6' align='center'>
                    {props.id}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='h6' align='center'>
                    {props.beingDelivered ? (
                      <img src={orderProcessing} alt='order processing' />
                    ) : (
                      "wsw"
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='h6' align='center'>
                    Order date
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify='flex-end'>
                <Button
                  // component={Link}
                  // to='/artist/signup'
                  variant='contained'
                  color='primary'
                  type='submit'
                  style={{
                    marginTop: theme.spacing(1),
                    color: theme.palette.error.main,
                  }}>
                  <Typography variant='h5'>Generate refund</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction='column' spacing={2}>
            {props.prods.map((data, i) => {
              console.log(data);
              return (
                <Grid container item xs={12}>
                  <Card
                    style={{
                      width: "100%",
                      padding: theme.spacing(3),
                      borderRadius: "0",
                      boxShadow: "2px 6px 20px rgba(58, 58, 58, 0.15)",
                    }}>
                    <Grid container spacing={2}>
                      <Grid item md={2}>
                        <CardMedia
                          component='img'
                          loading='lazy'
                          height='auto'
                          width=' 100%'
                          className={classes.media}
                          image={data.product.display_image}
                          title='Paella dish'
                        />
                      </Grid>
                      <Grid item md={6}>
                        <Grid item xs={12}>
                          <Typography
                            variant='h3'
                            style={{ marginBottom: theme.spacing(3) }}>
                            {data.product.name}
                          </Typography>
                        </Grid>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              variant='h6'
                              align='center'
                              style={{ color: theme.palette.secondary.light }}>
                              {data.product.category}
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant='h6' align='center'>
                              Quantity
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant='h6' align='center'>
                              {" "}
                              Price
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              variant='h6'
                              align='center'></Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant='h6' align='center'>
                              {data.quantity}
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant='h6' align='center'>
                              {data.product.kalafex_price}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item container md={4}>
                        {" "}
                        <Button
                          component={Link}
                          to={`/product/${data.product.pid}`}
                          variant='contained'
                          size='large'
                          color='secondary'
                          type='submit'
                          style={{
                            width: "100%",
                            marginTop: theme.spacing(1),
                            padding: "16px 24px",
                          }}>
                          <Typography variant='h5'>
                            Go to product page
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default OrderItem;
