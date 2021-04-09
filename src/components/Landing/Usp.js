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
import uspBg from "../../assets/uspBg.png";
import one from "../../assets/uspIcons/1.svg";
import two from "../../assets/uspIcons/2.svg";
import three from "../../assets/uspIcons/3.svg";
import four from "../../assets/uspIcons/4.svg";

const useStyles = makeStyles((theme) => ({
  usp: {
    background: `url(${uspBg}) no-repeat `,
    backgroundSize: "cover",
    margin: theme.spacing(1, 0),
    marginTop: theme.spacing(20),
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
  { icon: one, text: "Get 10% discount on your first signup" },
  {
    icon: two,
    text: "Fast and quick delivery, get your products within 48hrs",
  },
  { icon: three, text: "Support handmade made in India products" },
  {
    icon: four,
    text: "Be assured of the quality of products,from our verified sellers",
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
      <Typography
        variant={"h2"}
        align='center'
        style={{
          marginBottom: theme.spacing(2),
          padding: theme.spacing(0, 1),
          // background: "white",
          fontWeight: sm ? "400" : "bold",
        }}>
        See what we got
      </Typography>
      <Typography
        variant='h6'
        align='center'
        style={{
          paddingLeft: sm ? (md ? (lg ? "16%" : `12%`) : "8%") : null,
          paddingRight: sm ? (md ? (lg ? "16%" : `12%`) : "8%") : null,
          marginBottom: theme.spacing(4),
          // background: "white",
        }}>
        From logos that define the very roots of a brand's success to t-shirts
        that speak of versatile yet engaging personalities, if you need a
        design, we've got you covered.
      </Typography>

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
                  <img width='18%' height='18%' src={usp.icon} alt={i} />
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
