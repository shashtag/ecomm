import { Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { ADashboardContext } from "../../Context/ADashboardContext";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  const { insights } = useContext(ADashboardContext);
  const [insight, setInsight] = useState(null);

  useEffect(() => {
    if (insights) {
      setInsight([
        {
          head: "Total Views",
          value: `${insights?.details?.total_views} Views`,
          color: "#0FAFE9",
        },
        {
          head: "Total Orders",
          value: `${insights?.details?.total_orders} Orders`,
          color: "#FFC209",
        },
        {
          head: "Total Sales",
          value: `${insights?.details?.total_sales}.00 Rupees`,
          color: "#FF5376",
        },
        {
          head: "Balance",
          value: `${insights?.details?.balance} Rupees`,
          color: "#FD8623",
        },
      ]);
    }
    return () => {};
  }, [insights]);
  return (
    <Grid container spacing={3}>
      {insights
        ? insight?.map((data, i) => {
            return (
              <DashboardCard
                key={i}
                title={data.head}
                value={data.value}
                color={data.color}
              />
            );
          })
        : null}
    </Grid>
  );
};

export default DashboardCards;
