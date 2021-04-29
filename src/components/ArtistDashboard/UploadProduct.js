import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { TextField, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ADashboardContext } from "../../Context/ADashboardContext";
import { addProduct } from "../../API/Post";
import { UIContext } from "../../Context/UIContext";
import DropZone from "../../ui/DropZone";

const useStyles = makeStyles((theme) => ({
  inproot: {
    paddingTop: theme.spacing(2),
  },
}));

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   border: "2px solid red",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// };

// const activeStyle = {
//   borderColor: "#2196f3",
// };

// const acceptStyle = {
//   borderColor: "#00e676",
// };

// const rejectStyle = {
//   borderColor: "#ff1744",
// };

const UploadProduct = () => {
  const classes = useStyles();

  const theme = useTheme();
  const { register, handleSubmit, errors } = useForm();
  const { setLoading } = useContext(UIContext);
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  // const {
  //   acceptedFiles,
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  //   isDragAccept,
  //   isDragReject,
  // } = useDropzone();

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const {
    category,
    setCategory,
    name,
    setName,
    desc,
    setDesc,
    price,
    setPrice,
    quantity,
    setQuantity,
    img,
  } = useContext(ADashboardContext);
  const uploadClickHandler = () => {
    var data = new FormData();
    data.append("name", name);
    data.append("category", category);
    // data.append("subcategory", "mmm");
    data.append("description", desc);
    data.append("display_image", img);
    data.append("original_price", price);
    data.append("stock_left", quantity);

    addProduct(data, setLoading);
  };

  // const style = useMemo(
  //   () => ({
  //     ...baseStyle,
  //     ...(isDragActive ? activeStyle : {}),
  //     ...(isDragAccept ? acceptStyle : {}),
  //     ...(isDragReject ? rejectStyle : {}),
  //   }),
  //   [isDragActive, isDragReject, isDragAccept],
  // );
  console.log(errors);
  return (
    <Grid item>
      <Grid item xs={12} style={{ marginBottom: theme.spacing(3) }}>
        <Typography variant='h6' color='secondary'>
          Upload a Product
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form
          // className={classes.form}
          style={{ width: "100%" }}
          autoComplete='off'
          onSubmit={handleSubmit(uploadClickHandler)}>
          <Grid item xs={12}>
            <Autocomplete
              options={categoryList}
              getOptionLabel={(option) => option.title}
              onChange={(e, value) => {
                setCategory(value.title);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{ marginTop: theme.spacing(0), width: "100%" }}
                  label='Product Category'
                  name='category'
                  color='secondary'
                  value={category}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder='Enter Product Category'
                  // inputRef={register({
                  //   required: "Category is required",
                  // })}
                  error={Boolean(errors.category)}
                  helperText={errors.category?.message}
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
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter Product Name'
              // inputRef={register({
              //   required: "Name is required",
              //   minLength: {
              //     value: 40,
              //     message: "Please add a name longer than 40 characters ",
              //   },
              // })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: theme.spacing(3) }}>
            <DropZone
              name='dropzone'
              // validate={register({
              //   required: "Name is required",
              // })}
              // error={Boolean(errors.name)}
              // helperText={errors.name?.message}
            />
            {/* <section
            className='container'
            style={{
              // background: "red",
              border: "",
              borderRadius: "6px",
              padding: theme.spacing(2),
            }}>
            <div {...getRootProps(style)}>
              <input {...getInputProps()} />
              <input {...getInputProps()} />

              <Typography variant='h6'>
                Drag 'n' drop the product imag here, or click to select files
              </Typography>
            </div>
            <aside>
              <Typography variant='h6'>Files</Typography>
              <Typography variant='h6'>{files}</Typography>
            </aside>
          </section> */}
            {/* <TextField
            style={{ marginTop: theme.spacing(3), width: "100%" }}
            label='Product Image'
            name='img'
            color='secondary'
            variant='standard'
            value={img}
            type='file'
            // inputProps={{ type: "file" }}
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='Enter Product Image'
            inputRef={register({
              required: "Image is required",
            })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          /> */}
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginTop: theme.spacing(3), width: "100%" }}
              label='Product Description'
              name='desc'
              color='secondary'
              defaultValue={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter Product Description'
              // inputRef={register({
              //   required: "Description is required",
              //   minLength: {
              //     value: 200,
              //     message: "Please add a name longer than 200 characters ",
              //   },
              // })}
              error={Boolean(errors.desc)}
              helperText={errors.desc?.message}
              variant='outlined'
              multiline
              rows={4}
            />
          </Grid>
          <Grid container item xs={12} spacing={sm ? 1 : 0}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginTop: theme.spacing(3),
                  width: "100%",
                }}
                label='Your Price'
                name='price'
                color='secondary'
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder='Enter Product Price'
                // inputRef={register({
                //   required: "Price is required",
                // })}
                error={Boolean(errors.price)}
                helperText={errors.price?.message}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled
                style={{ marginTop: theme.spacing(3), width: "100%" }}
                label='Price'
                name='kPrice'
                color='secondary'
                value={price * 1.05}
                // InputLabelProps={{
                //   shrink: true,
                // }}
                placeholder='Kalafex Price '
                variant='outlined'
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={6}>
              <Autocomplete
                options={quantityList}
                getOptionLabel={(option) => option.title}
                classes={{ inputRoot: classes.inproot }}
                onChange={(e, value) => {
                  setQuantity(value.title);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={{ marginTop: theme.spacing(1), width: "100%" }}
                    label='Quantity'
                    name='quantity'
                    color='secondary'
                    value={quantity}
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    placeholder=''
                    // inputRef={register({
                    //   required: "Quantity is required",
                    // })}
                    error={Boolean(errors.quantity)}
                    helperText={errors.quantity?.message}
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
                type='submit'
                style={{
                  ...theme.palette.background.gradient,
                  width: "100%",
                  marginTop: theme.spacing(1),
                  padding: "16px 24px",
                }}>
                <Typography variant='h5'>Submit</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const categoryList = [
  { title: "Paintings & Artwork" },

  { title: "Lifestyle & Home" },
  { title: "Clothing" },
  { title: "Jewellery & Accessories" },
  { title: "Collectibles" },
];
const quantityList = [];

for (let index = 1; index <= 100; index++) {
  quantityList.push({ title: String(index) });
}

export default UploadProduct;
