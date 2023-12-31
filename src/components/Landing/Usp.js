import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import one from "../../assets/uspIcons/1.svg";
import two from "../../assets/uspIcons/2.svg";
import three from "../../assets/uspIcons/3.svg";
import four from "../../assets/uspIcons/4.svg";

const useStyles = makeStyles((theme) => ({
  usp: {
    // background: `url(${uspBg}) no-repeat `,
    backgroundSize: "contain",
    margin: theme.spacing(1, 0),
    marginTop: theme.spacing(5),
    padding: "0px 15px",
    [theme.breakpoints.up("md")]: {
      padding: " 0 3.2%",
    },
    [theme.breakpoints.down("sm")]: {
      background: `transparent`,
    },
  },
  card: {
    height: "150px",
  },
  cardWrapper: {
    width: "100%",
    padding: "1px",
    ...theme.palette.background.gradient,
    borderRadius: theme.shape.borderRadius,
  },
}));

const usp = [
  { icon: one, text: "Get exciting offers on your first order" },
  {
    icon: two,
    text: "Speedy delivery anywhere around India ",
  },
  { icon: three, text: "Support the Made in India movement" },
  {
    icon: four,
    text: "Quality products from quality vendors",
  },
];

const Usp = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid container spacing={2} justify='center' className={classes.usp}>
      <Grid item xs={12}>
        <Typography
          variant={"h2"}
          align='center'
          style={{
            marginBottom: theme.spacing(2),
            padding: theme.spacing(0, 1),
            // background: "white",
            fontWeight: sm ? "400" : "bold",
          }}>
          See what we’ve got
        </Typography>
        <Typography
          variant='h6'
          align='center'
          style={{
            paddingLeft: sm ? (md ? (lg ? "20%" : `14%`) : "8%") : null,
            paddingRight: sm ? (md ? (lg ? "20%" : `14%`) : "8%") : null,
            marginBottom: theme.spacing(4),
            // background: "white",
          }}>
          From adding to your home's aesthetic to adding to your personal
          versatile aesthetic, whatever it is you need, we've got you covered.
        </Typography>
      </Grid>
      {usp.map((usp, i) => (
        <Grid
          item
          key={i}
          style={{
            width: "100%",
            maxWidth: sm ? (md ? (lg ? "270px" : "228px") : "254px") : "400px",
            margin: sm ? (md ? (lg ? "0 1vw" : "0 0") : "0 3.2vw") : null,
          }}>
          <div className={classes.cardWrapper}>
            <Card className={classes.card}>
              <CardContent>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "16px",
                  }}>
                  <img
                    style={{}}
                    width='40px'
                    height='40px'
                    src={usp.icon}
                    alt={i}
                  />
                </div>
                <Typography
                  variant='caption'
                  align='center'
                  style={{
                    display: "inline-block",
                    width: "100%",
                    margin: "0 auto",
                  }}>
                  {usp.text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      ))}
      <Grid
        item
        container
        justify='center'
        style={{ margin: theme.spacing(3, 0) }}
        xs={12}>
        <Button
          component={Link}
          to='trending'
          variant='outlined'
          color='secondary'
          style={{
            backgroundColor: "white",
            padding: theme.spacing(2, 4),
            margin: "12px auto",
          }}>
          <Typography variant='h5'>Start Exploring</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Usp;
