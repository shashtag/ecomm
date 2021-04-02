import { Grid } from "@material-ui/core";
import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  return (
    <Grid container spacing={3}>
      {[
        { head: "total sales", value: "3000", color: "#0FAFE9" },
        { head: "total sale", value: "3000", color: "#FFC209" },
        { head: "total sals", value: "3000", color: "#FF5376" },
        { head: "total saes", value: "3000", color: "#FD8623" },
      ].map((data) => (
        <DashboardCard
          key={data.head}
          title={data.head}
          value={data.value}
          color={data.color}
        />
      ))}
    </Grid>
  );
};

export default DashboardCards;
