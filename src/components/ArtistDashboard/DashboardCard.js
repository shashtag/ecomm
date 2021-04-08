import { Typography, useTheme } from "@material-ui/core";
import { Avatar, Card, Grid } from "@material-ui/core";
import React from "react";
import artistCardImg from "../../assets/artistCardImg.png";

const DashboardCard = (props) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6}>
      <Card
        style={{
          padding: theme.spacing(3),
          paddingLeft: theme.spacing(6),
          background: props.color,
          color: "white",
        }}>
        <Grid container item>
          <Grid item xs={8}>
            <Typography variant='subtitle1'>{props.title}</Typography>
            <Typography variant='h4'>{props.value}</Typography>
          </Grid>
          <Grid item xs={4} container justify='flex-end'>
            <Avatar src={artistCardImg} />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default DashboardCard;
