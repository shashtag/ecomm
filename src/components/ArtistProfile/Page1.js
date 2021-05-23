import React, {
  useContext,
  // useEffect
} from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Avatar,
  TextField,
} from "@material-ui/core";
import { APContext } from "../../Context/APContext";
import { UIContext } from "../../Context/UIContext";
import { useForm } from "react-hook-form";
import { patchArtistDetails } from "../../API/Patch";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  large: {
    cursor: "pointer",
    "&:hover": {
      "& $avatar_img": {
        filter: "brightness(50%)",
      },
    },
  },
  input: {
    width: "500px",
  },
  img_wrapper: {
    position: "relative",

    "&:hover": {
      cursor: "pointer",
      "& $span": {
        display: "table-cell",
      },

      "& $letter": {
        display: "none",
      },
    },
  },
  span: {
    display: "none",
    zIndex: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  avatar_img: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Page1 = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { customURL, setCustomURL, avatar, setAvatar } = useContext(APContext);
  const { setLoading } = useContext(UIContext);
  const { register, handleSubmit, errors } = useForm();

  const handlePageChange = () => {
    var data = new FormData();
    data.append("custom_url", customURL);
    if (avatar.decoded) {
      data.append("profile_picture", avatar.decoded);
    }
    // const data = {
    //   profile_picture: avatar.decoded,
    //   custom_url: customURL,
    // };

    patchArtistDetails(
      data,
      props.setPage,
      props.page,
      setLoading,
      null,
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {},
      () => {}
    );
  };
  return (
    <>
      <Grid container item>
        <Typography variant="h4" style={{ paddingTop: theme.spacing(4) }}>
          Congratulations, your account has been created successfully!
        </Typography>
      </Grid>
      <Grid container item>
        <Typography variant="h5" style={{ paddingTop: theme.spacing(1) }}>
          Get started by setting up your shop{" "}
        </Typography>
      </Grid>
      <Grid container item justify="center">
        <form
          style={{ width: "100%" }}
          autoComplete="off"
          onSubmit={handleSubmit(handlePageChange)}
        >
          <Grid
            justify="center"
            item
            container
            style={{ paddingTop: theme.spacing(5) }}
          >
            <TextField
              name="avatar"
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.readyState === 2) {
                    setAvatar({
                      decoded: e.target?.files?.[0],
                      encoded: reader.result,
                    });
                  }
                };
                reader.readAsDataURL(e.target?.files?.[0]);
                // setAvatar({ ...avatar, decoded: e.target?.files?.[0] });
              }}
            />
            <label htmlFor="contained-button-file">
              <div className={[classes.large, classes.img_wrapper].join(" ")}>
                <span className={classes.span}>
                  <Edit style={{ fill: "white" }} />
                </span>
                <div
                  alt="default profile pic"
                  style={{
                    background: `url(${
                      avatar.encoded || "/images/default.jpeg"
                    }) center center / cover no-repeat `,
                    transition: "0.1s ease-in-out all",
                  }}
                  // src={avatar.encoded}
                  className={classes.avatar_img}
                ></div>
              </div>
              {/* <Avatar
                alt="default profile pic"
                src={avatar.encoded}
                className={classes.large}
              /> */}
            </label>
          </Grid>

          <Grid
            item
            container
            justify="center"
            style={{
              marginBottom: theme.spacing(2),
              marginTop: theme.spacing(4),
            }}
          >
            <TextField
              className={classes.input}
              label="Custom URL"
              name="curl"
              variant="outlined"
              color="secondary"
              value={customURL}
              onChange={(e) => {
                setCustomURL(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter your custom URL"
              inputRef={register({
                required: "Please add a custom URl",
              })}
              error={Boolean(errors.curl)}
              helperText={
                errors.curl?.message ||
                "** This url is final and cannot be reversed"
              }
            />
          </Grid>
          <Grid item container style={{}} justify="flex-end">
            <Button
              style={{
                padding: "12px 80px",
                borderRadius: "4px",
                background: theme.palette.secondary.light,
                marginTop: theme.spacing(2),
              }}
              variant="contained"
              size="large"
              type="submit"
              color="secondary"
              className={classes.loginButton}
            >
              <Typography variant="h5">Next</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Page1;
