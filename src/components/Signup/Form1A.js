import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Grid,
  makeStyles,
  Button,
  Typography,
  useTheme,
  TextField,
} from "@material-ui/core";
import { SignupContext } from "../../Context/SignupContext";
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
  form: {
    marginBottom: theme.spacing(2),
    "& .MuiFormLabel-root": {
      color: "rgba(0, 0, 0, 0.6)",
    },
    "& .MuiFormLabel-colorSecondary.Mui-focused": {
      color: "#152238 !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.6)",
      },
      "&:hover fieldset": {
        borderColor: "#152238 !important",
      },
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(34px, -6px) scale(0.75)",
    },
    "& legend": {
      marginLeft: "20px",
    },
  },
}));

const Form1 = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { register, handleSubmit, errors } = useForm();
  const {
    selectedDate,
    handleDateChange,
    name,
    setName,
    email,
    setEmail,
  } = useContext(SignupContext);

  // const [selectedDate, handleDateChange] = useState(new Date(2001, 0, 1));
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const sendOtpClickHandler = () => {
    props.setStep(props.step + 1);
    console.log("sssw");
  };

  return (
    <>
      <Grid container item direction='column'>
        <form
          className={classes.form}
          autoComplete='off'
          onSubmit={handleSubmit(sendOtpClickHandler)}>
          <Grid item>
            <TextField
              className={classes.input}
              label='Name'
              name='name'
              variant='outlined'
              color='secondary'
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your name'
              inputRef={register({ required: "Name is required" })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item>
            <KeyboardDatePicker
              autoOk
              animateYearScrolling
              disableFuture
              // clearable
              // disableToolbar
              // color='secondary'
              InputLabelProps={{
                shrink: true,
              }}
              name='date'
              format='dd/MM/yyyy'
              label='Date of Birth'
              className={[classes.input, classes.dateInp].join(" ")}
              inputVariant='outlined'
              value={selectedDate}
              onChange={(date) => handleDateChange(date)}
              inputRef={register({
                required: "Date of Birth is required",
                type: "number",
              })}
              error={Boolean(errors.date)}
              helperText={errors.date?.message}
            />
          </Grid>
          <Grid item style={{ marginBottom: theme.spacing(2) }}>
            <TextField
              className={classes.input}
              label='Email'
              name='email'
              variant='outlined'
              color='secondary'
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Enter your Email id'
              inputRef={register({
                required: "Email ID is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid
            item
            style={{
              marginBottom: theme.spacing(4),
              marginTop: -theme.spacing(1.5),
            }}>
            <Typography variant='caption' style={{ fontWeight: "400" }}>
              We will send you code for verification :{")"}
            </Typography>
          </Grid>
          <Grid item style={{}}>
            <Button
              style={{ padding: "20px 40px", borderRadius: "4px" }}
              variant='contained'
              size='large'
              type='submit'
              color='secondary'
              className={classes.loginButton}>
              <Typography variant='h5'>Continue</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Form1;
