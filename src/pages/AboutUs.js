import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 15px",
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.up("md")]: {
      padding: "0vh 3.2%",
      paddingBottom: theme.spacing(20),
    },
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  name: {
    marginBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  para: {
    marginBottom: theme.spacing(1),
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item>
        <Typography
          variant='h2'
          style={{
            fontWeight: "bold",
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(6),
          }}>
          About Us
        </Typography>
      </Grid>
      <Grid container item className={classes.section}>
        <Grid md='6'>
          <Typography variant='h4' className={classes.heading} align='justify'>
            Kalafex is a place where customers can discover and buy artwork made
            by the finest of the finest.
          </Typography>
          <Typography variant='h5' align='justify'>
            We exist for the people- the consumer and the artists are the heart
            and soul of Kalafex. We connect the two and provide value and
            prosperity to the artist’s work. By creating a valuable and loyal
            relationship, quality artists are able to thrive.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.section}>
        <Grid md='6'></Grid>
        <Grid md='6'>
          <Typography variant='h4' className={classes.heading} align='justify'>
            The motivation behind Kalafex
          </Typography>
          <Typography variant='h5' align='justify'>
            We brought Kalafex into existence for the soul purpose of the youth
            & the older but spiritually still youth artists getting the
            recognition that they deserve and work towards by providing a formal
            site for sale with no direct fees* and no hidden fees. We work
            towards a better tomorrow in which the deserving get the
            recognition.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.section}>
        <Grid md='6'>
          <Typography variant='h4' className={classes.heading} align='justify'>
            We drive small businesses and other individual sellers
          </Typography>
          <Typography variant='h5' align='justify'>
            Our support fully goes towards increasing the sales and engagement
            on the works of the small businesses and individual sellers that are
            registered with Kalafex. With the belief that our vendors are the
            backbone of our community, our team works tirelessly to ensure that
            all the vendors are able to thrive and our affiliates are able to
            provide hassle-free. To do so, we connect our vendors to our loyal
            consumer base.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        className={classes.section}
        style={{ marginTop: theme.spacing(2) }}>
        <Typography variant='h3'>The Founders </Typography>
      </Grid>
      <Grid container item className={classes.section}>
        <Grid>
          <Typography variant='h4' className={classes.name}>
            Aryan Khaunte
          </Typography>
          <Typography variant='h5' className={classes.title}>
            Co-Founder & Chief-Executive Officer (CEO)
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            Aryan Khaunte is the Co-Founder of Kalafex and has served as our
            Chief Executive Officer since November 2020.
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            Kalafex was actually a bit of a midnight decision. I can’t remember
            which day it was but somewhere in August end or early September,
            Mithil called me at around 1 AM and said he had an idea to talk, and
            that’s actually when Kalafex came into existence. At that point the
            idea was just extremely rough and still needed a lot of planning so
            immediately we hopped onto brainstorming to make the business model
            sustainable for us. The both of us are still in school but since it
            was online classes we had more time on our hands than ever.
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            I’ve seen the struggle of individual sellers on social media
            platforms and how they aren’t getting the outreach and recognition
            that they deserve. The algorithm on major platforms doesn’t exactly
            prevent but it makes it harder for small content creators to be
            noticed. I have a few friends of mine whose artwork is absolutely
            mesmerising but they could never get the amount of recognition that
            they deserved. Kalafex was an opportunity to bring upon a change on
            this very issue in question. By providing a proper platform to sell
            their products without any direct fees or hidden fees, the artists
            are able to use our website hassle-free and by providing them
            logistics services alongside other services, we are able to create a
            community of artists all around India. Currently, we’ve made
            Kalafex’s services available in almost all parts of India. We plan
            to promote the self-reliant India movement of Atmanirbhar Bharat and
            in my personal opinion, the Indian youth would benefit a lot from us
            by starting a business at a young age.{" "}
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            As a teenage entrepreneur, I’ve always learnt to listen to what
            people have to say but never take it to my heart. The best advice I
            have ever received is to ‘never take criticism from someone you
            would not take advice from’. Which I feel like is extremely
            important when starting a business. I had people tell me that this
            start-up idea would not work because it lacked certain fragments of
            realistic business values due to which no one would want to join the
            website and as Mithil and I progressed further and further the
            thoughts of Kalafex not working out hit me harder but I kept my head
            up and focussed on making it work. Today, Kalafex has become a
            reality and I’m proud of us.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.section}>
        <Grid>
          <Typography variant='h4' className={classes.name}>
            Mithil Anup
          </Typography>
          <Typography variant='h5' className={classes.title}>
            Co-Founder & Senior Managing Director (S-MD)
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            Mithil Anup is the Co-Founder of Kalafex and has served as our
            Co-Founder & Senior Managing Director since November 2020.
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            I thought of Kalafex as I was sitting in my Maths class and I
            remember getting super excited to even get it up and running because
            I believed that Kalafex could help artists and small business but as
            I thought of the whole process of starting it I had lesser and
            lesser hope that I will be able to manage it or even be able to get
            it up and running. One day I decided to talk to Aryan and if it
            wasn’t for him Kalafex would have never become a reality.
          </Typography>
          <Typography variant='h5' className={classes.para} align='justify'>
            The idea of helping and empowering artists and businesses is at the
            core of Kalafex.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
