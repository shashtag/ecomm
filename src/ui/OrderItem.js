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
  useMediaQuery,
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
  icon: {
    position: "absolute",
    top: "0px",
    right: "10px",
  },
}));

const OrderItem = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = () => {
    setExpand(!expand);
  };

  console.log(props.prods);

  return (
    // <Grid item container style={{ margin: theme.spacing(2) }}>
    <Accordion
      expanded={expand}
      onChange={handleChange}
      style={{ padding: theme.spacing(md ? 2 : 0), width: "100%" }}>
      <AccordionSummary
        classes={{ expandIcon: classes.icon }}
        expandIcon={<ExpandMoreIcon />}>
        <Grid container direction='row' spacing={2}>
          <Grid
            container
            justify='center'
            alignItems='center'
            item
            xs={12}
            md={2}>
            <LocalMallIcon style={{ fontSize: "100px" }} />
          </Grid>
          <Grid container item md={10}>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={12} md={4}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Order number
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  {props.id}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Status
                </Typography>
                <Typography
                  variant='h6'
                  align={md ? "center" : "left"}
                  style={{
                    // fontSize: 20,
                    background: props.beingDelivered
                      ? "-webkit-linear-gradient(90.04deg, #FFB800 0%, #FF4185 99.67%"
                      : "#6FCF97",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  {props.beingDelivered ? "Order processing" : "Delivered"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  Total Cost
                </Typography>
                <Typography variant='h6' align={md ? "center" : "left"}>
                  ₹ {props.price}
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
                  marginTop: theme.spacing(2),
                  color: theme.palette.error.main,
                }}>
                <Typography variant='h5'>Request refund</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction='column' spacing={2}>
          {props?.prods?.map((data, i) => {
            console.log(data);
            return (
              <Grid container key={i} item xs={12}>
                <Card
                  style={{
                    width: "100%",
                    padding: theme.spacing(2),
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
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={4}>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}
                            style={{ color: theme.palette.secondary.light }}>
                            {data.product.category}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}>
                            Quantity
                          </Typography>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}>
                            {data.quantity}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}>
                            Price
                          </Typography>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}>
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
                        <Typography variant='h5'>Go to product page</Typography>
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
    // </Grid>
  );
};

export default OrderItem;
