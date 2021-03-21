import React, { useContext } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Avatar,
  TextField,
} from "@material-ui/core";
import defaultProfilePic from "../../assets/defaultProfilePic.png";
import { APContext } from "../../Context/APContext";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  large: {
    width: "200px",
    height: "200px",
  },
  input: {
    width: "500px",
  },
}));

const Page1 = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [customURL, setCustomURL] = useContext(APContext);
  const { register, handleSubmit, errors } = useForm();
  const handlePageChange = () => props.setPage(props.page + 1);

  console.log(errors);
  return (
    <>
      <Grid item>
        <Typography variant='h4' style={{ paddingTop: theme.spacing(4) }}>
          Congratulations, account created successfully!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h5' style={{ paddingTop: theme.spacing(1) }}>
          Let us start by setting up your shop.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        style={{ paddingTop: theme.spacing(5) }}>
        <Avatar
          alt='default profile pic'
          src={defaultProfilePic}
          className={classes.large}
        />
      </Grid>
      <form
        className={classes.form}
        autoComplete='off'
        onSubmit={handleSubmit(handlePageChange)}>
        <Grid
          item
          container
          justify='center'
          style={{
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(4),
          }}>
          <TextField
            className={classes.input}
            label='Custom URL'
            name='curl'
            variant='outlined'
            color='secondary'
            defaultValue={customURL}
            onChange={(e) => {
              setCustomURL(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='Enter your custom URL'
            inputRef={register({
              required: "Please add a custom URl",
            })}
            error={Boolean(errors.curl)}
            helperText={errors.curl?.message}
          />
        </Grid>
        <Grid item container style={{}} justify='flex-end'>
          <Button
            style={{
              padding: "12px 80px",
              borderRadius: "4px",
              background: theme.palette.secondary.light,
              marginTop: theme.spacing(2),
            }}
            variant='contained'
            size='large'
            type='submit'
            color='secondary'
            className={classes.loginButton}>
            <Typography variant='h5'>Next</Typography>
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default Page1;
