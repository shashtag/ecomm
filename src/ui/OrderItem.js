import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardMedia,
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchOrderDetailsFinally } from "../API/Get";
import orderProcessing from "../assets/orderProcessing.png";
import { Link } from "react-router-dom";
import { UIContext } from "../Context/UIContext";
import { orderProductStatus, setDeliveryReceived } from "../API/Post";

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
  const { usrBaseInfo } = useContext(UIContext);

  const handleChange = () => {
    setExpand(!expand);
  };

  return (
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
                  {usrBaseInfo.is_kalafex_admin ? "Deliverd" : "Status"}
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

            {usrBaseInfo.is_kalafex_admin ? (
              <Grid
                item
                container
                alignItems='center'
                justify='flex-end'
                xs={12}>
                <Typography variant='h6' color='initial'>
                  Delivered
                </Typography>

                <Checkbox
                  checked={!props.beingDelivered}
                  disabled={!props.beingDelivered}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={() => {
                    let raw = {
                      order: props.id,
                    };
                    setDeliveryReceived(raw);
                  }}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Grid>
            ) : null}

            {/* <Grid container justify='flex-end'>
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
            </Grid> */}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction='column' spacing={2}>
          {props?.prods?.map((data, i) => {
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
                    <Grid item md={10}>
                      <Grid item xs={12}>
                        <Typography
                          variant='h3'
                          style={{ marginBottom: theme.spacing(3) }}>
                          {data.product.name}
                        </Typography>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={3}>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}
                            style={{ color: theme.palette.secondary.light }}>
                            {data.product.category}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
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
                        <Grid item xs={12} md={3}>
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
                        <Grid item xs={12} md={3}>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}>
                            Status
                          </Typography>
                          <Typography
                            variant='h6'
                            align={md ? "center" : "left"}
                            style={{
                              // fontSize: 20,
                              background: !data.handed_over
                                ? "-webkit-linear-gradient(90.04deg, #FFB800 0%, #FF4185 99.67%"
                                : "#6FCF97",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}>
                            {data.handed_over
                              ? "Product recieved"
                              : "Collecting product"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {usrBaseInfo.is_kalafex_admin ? (
                      <Grid
                        item
                        container
                        alignItems='center'
                        justify='flex-end'
                        xs={12}>
                        <Typography variant='h6' color='initial'>
                          Handed Over
                        </Typography>

                        <Checkbox
                          checked={data.handed_over}
                          disabled={data.handed_over}
                          onChange={() => {
                            let raw = {
                              order_product: data.op_id,
                            };
                            orderProductStatus(raw);
                          }}
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </Grid>
                    ) : null}
                    <Grid item container xs={12}>
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
