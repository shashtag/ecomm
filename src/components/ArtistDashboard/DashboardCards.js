import { Grid } from "@material-ui/core";
import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  return (
    <Grid container spacing={3}>
      {[
        { head: "Total Sales", value: "3000", color: "#0FAFE9" },
        { head: "Total Insights", value: "3000", color: "#FFC209" },
        { head: "Total Earning", value: "3000", color: "#FF5376" },
        { head: "Total Orders", value: "3000", color: "#FD8623" },
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
