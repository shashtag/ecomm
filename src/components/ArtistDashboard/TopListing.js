import { Button, Paper, Typography, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import DropZone from "../../ui/DropZone";
import { ADashboardContext } from "../../Context/ADashboardContext";
import axios from "axios";
import { UIContext } from "../../Context/UIContext";

const TopListing = (props) => {
  // console.log(props);
  const { img } = useContext(ADashboardContext);
  const { setLoading, setSnackbar } = useContext(UIContext);

  const handleAddImg = () => {
    setLoading(true);
    var data = new FormData();
    data.append("product", props.pid);
    data.append("mini_description", "img");
    data.append("image", img);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_URL}store/create/product/add_image/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        setSnackbar({
          value: true,
          message: "Image has been added",
          type: "success",
        });
        window.location.reload();
      })
      .catch(function (error) {
        setLoading(false);

        setSnackbar({
          value: true,
          message: "An error occurred. Please try again.",
          type: "error",
        });
      });
  };
  const theme = useTheme();
  return (
    <Grid
      item
      container
      xs={12}
      spacing={0}
      style={{ paddingTop: theme.spacing(1) }}>
      <Grid container item xs={5} style={{ padding: theme.spacing(0.5) }}>
        <Paper
          elevation={0}
          square
          style={{
            aspectRatio: "3/4",
            width: "100%",
            marginBottom: theme.spacing(1),
            background: `#ffffff url("${props.img}")  no-repeat  center center `,
            backgroundSize: "contain",
          }}></Paper>
      </Grid>
      <Grid
        container
        item
        xs={7}
        direction='column'
        justify='flex-start'
        style={{ padding: theme.spacing(0.5) }}>
        <Grid item container>
          <Typography
            variant='h5'
            component='div'
            noWrap
            style={{
              marginBottom: theme.spacing(0.5),
            }}>
            {props.name}
          </Typography>
        </Grid>
        <Grid item container>
          <Typography
            variant='subtitle2'
            style={{ marginBottom: theme.spacing(2) }}>
            {props.category}
          </Typography>
        </Grid>
        <Grid item container>
          <div style={{ width: "100%" }}>
            <DropZone sm={true} />
            <Button
              // startIcon={<AddBoxIcon />}
              variant='contained'
              size='large'
              color='secondary'
              type='submit'
              style={{
                ...theme.palette.background.gradient,
                width: "100%",
                marginTop: theme.spacing(1),
                padding: "16px 24px",
              }}
              onClick={handleAddImg}>
              <Typography variant='h5'>Submit</Typography>
            </Button>
          </div>
        </Grid>
        {/* <Grid item container>
          <Button
            variant='contained'
            size='large'
            color='error'
            type='submit'
            style={{
              width: "100%",
              marginTop: theme.spacing(1),
              padding: "16px 24px",
            }}>
            <Typography variant='h5'>Delete Item</Typography>
          </Button>
        </Grid> */}
        {/* <Typography
          variant='subtitle1'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ marginBottom: theme.spacing(1) }}>
          ddds
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default TopListing;
