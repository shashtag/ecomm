import { Typography, useTheme } from "@material-ui/core";
import { Avatar, Card, Grid } from "@material-ui/core";
import React from "react";

const DashboardCard = (props) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6}>
      <Card
        style={{
          padding: theme.spacing(3, 1.5),

          background: props.color,
          color: "white",
        }}>
        <Grid container item>
          <Grid item xs={8}>
            <Typography variant='subtitle1'>{props.title}</Typography>
            <Typography variant='h4'>{props.value}</Typography>
          </Grid>
          <Grid item xs={4} container justify='flex-end'>
            <Avatar src='https://kalafex-images.s3.ap-south-1.amazonaws.com/Utils/artistCardImg.png' />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default DashboardCard;
