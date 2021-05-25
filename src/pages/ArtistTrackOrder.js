import {
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { fetchArtistOrders } from "../API/Get";
import { UIContext } from "../Context/UIContext";
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

const ArtistTrackOrder = () => {
  const [artistOrder, setArtistOrder] = useState(null);
  const { setLoading } = useContext(UIContext);
  const classes = useStyles();
  const theme = useTheme();

  const md = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    fetchArtistOrders(setLoading, setArtistOrder);
    return () => {};
  }, []);
  return (
    <Grid container item>
      <Grid container item xs={12}>
        <Typography variant='h3' color='secondary'>
          Orders
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        {artistOrder?.results?.map((data, i) => {
          return (
            <Grid key={i} item xs={12}>
              <Card
                style={{
                  width: "100%",
                  padding: theme.spacing(2),
                  marginBottom: theme.spacing(2),
                  borderRadius: "0",
                  boxShadow: "2px 6px 20px rgba(58, 58, 58, 0.15)",
                }}>
                <Grid container spacing={2}>
                  <Grid item md={2} xs={12}>
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
                        <Typography variant='h6' align={md ? "center" : "left"}>
                          Quantity
                        </Typography>
                        <Typography variant='h6' align={md ? "center" : "left"}>
                          {data.quantity}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography variant='h6' align={md ? "center" : "left"}>
                          Price
                        </Typography>
                        <Typography variant='h6' align={md ? "center" : "left"}>
                          {data.product.kalafex_price}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Typography variant='h6' align={md ? "center" : "left"}>
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
    </Grid>
  );
};

export default ArtistTrackOrder;
