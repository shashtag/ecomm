import { Typography, useTheme } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

const UploadProduct = () => {
  const theme = useTheme();
  return (
    <Grid container item>
      <Grid item xs={12} style={{ marginBottom: theme.spacing(3) }}>
        <Typography variant='h6' color='secondary'>
          Upload a Product
        </Typography>
      </Grid>
      <form
        // className={classes.form}
        style={{ width: "100%" }}
        autoComplete='off'
        // onSubmit={handleSubmit(loginClickHandler)}
      >
        <Grid item xs={12}>
          <Autocomplete
            id='combo-box-demo'
            options={categoryList}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ marginTop: theme.spacing(0), width: "100%" }}
                label='Product Category'
                name='category'
                color='secondary'
                // defaultValue={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter Product Category'
                // inputRef={register({
                //   required: "Email/Phone number is required",
                //   pattern: {
                //     value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                //     message: "Invalid Email/Phone number ",
                //   },
                // })}
                // error={Boolean(errors.id)}
                // helperText={errors.id?.message}
                variant='outlined'
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ marginTop: theme.spacing(3), width: "100%" }}
            label='Product Name'
            name='name'
            color='secondary'
            // defaultValue={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='Enter Product Name'
            // inputRef={register({
            //   required: "Email/Phone number is required",
            //   pattern: {
            //     value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
            //     message: "Invalid Email/Phone number ",
            //   },
            // })}
            // error={Boolean(errors.id)}
            // helperText={errors.id?.message}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: theme.spacing(3) }}>
          <Typography variant='h6' color='secondary'>
            Upload product images
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ marginTop: theme.spacing(3), width: "100%" }}
            label='Product Description'
            name='desc'
            color='secondary'
            // defaultValue={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='Enter Product Description'
            // inputRef={register({
            //   required: "Email/Phone number is required",
            //   pattern: {
            //     value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
            //     message: "Invalid Email/Phone number ",
            //   },
            // })}
            // error={Boolean(errors.id)}
            // helperText={errors.id?.message}
            variant='outlined'
            multiline
            rows={4}
          />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item md={6}>
            <TextField
              style={{ marginTop: theme.spacing(3), width: "100%" }}
              label='Your Price'
              name='price'
              color='secondary'
              // defaultValue={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter Product Price'
              // inputRef={register({
              //   required: "Email/Phone number is required",
              //   pattern: {
              //     value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
              //     message: "Invalid Email/Phone number ",
              //   },
              // })}
              // error={Boolean(errors.id)}
              // helperText={errors.id?.message}
              variant='outlined'
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              disabled
              style={{ marginTop: theme.spacing(3), width: "100%" }}
              label='Price'
              name='kPrice'
              color='secondary'
              // defaultValue={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Kalafex Price '
              // inputRef={register({
              //   required: "Email/Phone number is required",
              //   pattern: {
              //     value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
              //     message: "Invalid Email/Phone number ",
              //   },
              // })}
              // error={Boolean(errors.id)}
              // helperText={errors.id?.message}
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={1}>
          <Grid item xs={6}>
            <Autocomplete
              id='combo-box-demo'
              options={quantityList}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ marginTop: theme.spacing(1), width: "100%" }}
                  label='Quantity'
                  name='category'
                  color='secondary'
                  // defaultValue={email}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  placeholder=''
                  // inputRef={register({
                  //   required: "Email/Phone number is required",
                  //   pattern: {
                  //     value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                  //     message: "Invalid Email/Phone number ",
                  //   },
                  // })}
                  // error={Boolean(errors.id)}
                  // helperText={errors.id?.message}
                  variant='filled'
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              // component={Link}
              // to='/artist/signup'
              variant='contained'
              size='large'
              color='secondary'
              style={{
                ...theme.palette.background.gradient,
                marginTop: theme.spacing(1),
                padding: "16px 24px",
              }}>
              <Typography variant='h5'>Sell Your Design</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

const categoryList = [
  { title: "Paintings & Artwork" },
  { title: "Lifestyle & Home" },
  { title: "Jewellery & Accessories" },
  { title: "Collectibles" },
];
const quantityList = [];

for (let index = 1; index <= 100; index++) {
  quantityList.push({ title: String(index) });
}

export default UploadProduct;
