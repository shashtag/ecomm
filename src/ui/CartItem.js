import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useContext, useEffect, useState } from "react";
import { delCartItem } from "../API/Delete";
import { patchCartItem } from "../API/Patch";
import { OrderContext } from "../Context/OrderContext";
import { UIContext } from "../Context/UIContext";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    aspectRatio: "3/4",
    filter: "drop-shadow(1.18902px 4.7561px 17.8354px rgba(58, 58, 58, 0.15))",
    // height: "70%",
    backgroundSize: "contain",
  },
}));

const CartItem = (props) => {
  const { setLoading, setSnackbar } = useContext(UIContext);
  const [checked, setChecked] = useState(true);
  const [cPrice, setCPrice] = useState("0.00");
  const classes = useStyles();
  const theme = useTheme();
  const [quantity, setQuantity] = useState(props.quantity);
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const { selectedItems } = useContext(OrderContext);

  useEffect(() => {
    setCPrice(quantity * props.price);

    return () => {};
  }, [quantity, props.price]);

  useEffect(() => {
    if (!checked) {
      selectedItems.current.splice(selectedItems.current.indexOf(props.id), 1);
    }
    if (checked) {
      selectedItems.current.push(props.id);
    }
    return () => {};
  }, [checked]);

  const handleQuantityChange = (value) => {
    const data = { quantity: value?.title };

    setQuantity(value?.title);
    patchCartItem(data, props.id, setLoading, setSnackbar);
  };

  return (
    <>
      <Grid container justify='center' alignItems='center' item xs={2} md={1}>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          color='secondary'
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Grid>
      <Grid item xs={10} md={11}>
        <Card
          style={{
            padding: theme.spacing(3),
            borderRadius: "0",
            boxShadow: "2px 6px 20px rgba(58, 58, 58, 0.15)",
          }}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <CardMedia
                component='img'
                loading='lazy'
                height='auto'
                width=' 100%'
                className={classes.media}
                image={props?.img}
                title='Paella dish'
              />
            </Grid>
            <Grid item md={8}>
              <Grid item>
                <CardContent style={{ padding: md ? null : "0" }}>
                  <Typography
                    variant='h4'
                    style={{
                      marginBottom: theme.spacing(1),
                    }}>
                    {props.name}
                  </Typography>
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: theme.spacing(2),
                      color: "#40567A",
                    }}>
                    {props.category}
                  </Typography>

                  <Typography
                    onClick={() => {
                      delCartItem(props.id, setLoading, setSnackbar);
                    }}
                    variant='h6'
                    style={{
                      cursor: "pointer",
                      marginBottom: theme.spacing(2),
                      color: theme.palette.error.main,
                    }}>
                    Delete
                  </Typography>
                  <Grid
                    container
                    item
                    alignItems='center'
                    style={{ marginBottom: theme.spacing(3) }}>
                    <Autocomplete
                      getOptionSelected={(option, value) =>
                        option.title === value.title
                      }
                      value={{ title: String(quantity) }}
                      style={{}}
                      options={quantityList}
                      getOptionLabel={(option) => option.title}
                      classes={{ inputRoot: classes.inproot }}
                      onChange={(e, value) => {
                        handleQuantityChange(value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          style={{
                            marginTop: theme.spacing(1),
                            width: "160px",
                          }}
                          label='Quantity'
                          name='quantity'
                          color='secondary'
                          InputLabelProps={{
                            shrink: true,
                          }}
                          placeholder=''
                          // inputRef={register({
                          //   required: "Quantity is required",
                          // })}
                          // error={Boolean(errors.quantity)}
                          // helperText={errors.quantity?.message}
                          variant='filled'
                        />
                      )}
                    />
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant='h2'
                        style={{
                          fontWeight: "bold",
                          marginLeft: md ? theme.spacing(2) : null,
                          marginTop: theme.spacing(1),
                        }}>
                        ₹ {cPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <Grid container direction='row' item>
                    <IconButton
                      style={{
                        padding: "0",
                        height: "60px",
                        width: "60px",
                        marginRight: theme.spacing(1),
                      }}
                      // onClick={() => {
                      //   history.push(
                      //     `/artist/${productDetails?.artist?.custom_url}`,
                      //   );
                      // }}
                    >
                      <Avatar
                        // component={Button}
                        // to={`/artist/${productDetails?.artist?.custom_url}`}
                        // src={productDetails?.artist?.profile_picture}
                        style={{
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </IconButton>
                    <Grid
                      item
                      style={{
                        paddingTop: theme.spacing(0.5),
                        marginBottom: theme.spacing(5),
                      }}>
                      <Typography variant='h5'>
                        {productDetails?.artist?.full_name}
                      </Typography>
                      <Typography variant='h6'>
                        {productDetails?.artist?.custom_url}
                      </Typography>
                    </Grid>
                  </Grid> */}
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default CartItem;

const quantityList = [];

for (let index = 1; index <= 100; index++) {
  quantityList.push({ title: String(index) });
}
