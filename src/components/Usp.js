import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  // useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import uspBg from "../assets/uspBg.png";
import one from "../assets/uspIcons/1.svg";
import two from "../assets/uspIcons/2.svg";
import three from "../assets/uspIcons/3.svg";
import four from "../assets/uspIcons/4.svg";

const useStyles = makeStyles((theme) => ({
  usp: {
    background: `url(${uspBg}) no-repeat `,
    backgroundSize: "cover",
    marginTop: theme.spacing(10),
    padding: " 0 4%",
  },
  card: {
    height: "150px",
  },
  cardWrapper: {
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

  return (
    <Grid container direction='column' spacing={2} className={classes.usp}>
      <Grid item xs={12}>
        <Typography variant='h2' align='center'>
          See what we got
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: `16%`, paddingRight: `16%` }}>
        <Typography variant='h6' align='center'>
          From logos that define the very roots of a brand's success to t-shirts
          that speak of versatile yet engaging personalities, if you need a
          design, we've got you covered.{" "}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify='center'
        spacing={4}
        style={{
          paddingTop: theme.spacing(4),
          paddingLeft: `8%`,
          paddingRight: `8%`,
        }}>
        {usp.map((usp, i) => (
          <Grid item md={3} key={i}>
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
                    <img src={usp.icon} alt={i} />
                  </div>
                  <Typography
                    variant='caption'
                    align='center'
                    style={{ display: "inline-block" }}>
                    {usp.text}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
        <Grid item style={{ margin: theme.spacing(3, 0) }}>
          <Button
            variant='outlined'
            color='secondary'
            style={{ padding: theme.spacing(2, 4) }}>
            <Typography variant='h5'>Start Exploring</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Usp;
