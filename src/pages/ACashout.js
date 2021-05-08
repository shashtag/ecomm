import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { allCashoutReq } from "../API/Get";
import CashoutItem from "../components/CashoutItem";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px 15px`,
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing(6)}px 3.2%`,
    },
  },
}));

const ACashout = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const { page } = useParams();

  const { setLoading } = useContext(UIContext);
  const [cashouts, setCashouts] = useState(null);

  const [pagination, setPagination] = useState(page ? Number(page) : 1);

  useEffect(() => {
    allCashoutReq(setLoading, setCashouts, pagination);
    return () => {};
  }, [pagination]);
  useEffect(() => {
    allCashoutReq(setLoading, setCashouts, pagination);
    return () => {};
  }, []);

  const handlePageChange = (event, value) => {
    setPagination(value);

    if (value !== 1) {
      history.push(`/admin/cashout/${value}`);
    } else {
      history.push(`/admin/cashout`);
    }
  };
  // console.log(pagination);

  return (
    <Grid container className={classes.root} direction='column'>
      <Grid item>
        <Typography variant='h3' style={{ marginBottom: theme.spacing(3) }}>
          Cashout Requests
        </Typography>
      </Grid>

      {cashouts?.results?.length !== 0 && cashouts?.results ? (
        cashouts?.results?.map((data, i) => {
          {
            /* console.log(data); */
          }
          return (
            <CashoutItem
              key={i}
              aadhar={data.aadhar_card_no}
              accNo={data.account_number}
              balance={data.balance}
              accName={data.beneficiary_name}
              customUrl={data.custom_url}
              gstNo={data.gst_no}
              ifsc={data.ifsc_code}
              pan={data.pan_card_no}
              upi={data.upi_id}
              img={data.profile_picture}
              name={data.user.full_name}
              email={data.user.email}
              phone={data.user.phone_number}
              id={data.user.id}
            />
          );
        })
      ) : (
        <div
          style={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center",
            height: "100%",
            width: "100%",
          }}>
          <Typography variant='h1' align='center' style={{ opacity: "0.3" }}>
            No Requests Found
          </Typography>
        </div>
      )}
      <Grid container item xs={12} justify='center'>
        <Pagination
          style={{ marginTop: theme.spacing(4) }}
          size='large'
          count={cashouts?.total_pages}
          page={Number(pagination)}
          onChange={handlePageChange}
          variant='outlined'
          shape='rounded'
        />
      </Grid>
    </Grid>
  );
};

export default ACashout;
