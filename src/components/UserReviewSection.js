import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { getReviewUser } from "../API/Get";
import { addReview } from "../API/Post";
import { delReview } from "../API/Delete";

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

function UserReviewSection({ productId }) {
  const [reviews, setReviews] = useState({});
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const classes = useStyles();

  const submitReview = () => {
    addReview(productId, { rating, review });
  };

  const deleteRev = () => {
    delReview(productId);
  };

  useEffect(() => {
    getReviewUser(productId, setReviews);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {!reviews.details && (
        <>
          <Typography component="legend">Rating</Typography>
          <Rating
            value={rating}
            precision={0.5}
            onChange={(e, newV) => setRating(newV)}
          />
          <TextField
            className={classes.input}
            label="Review"
            name="review"
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
            variant="outlined"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Enter Your Review"
            multiline={true}
            rows={3}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: 10,
            }}
          >
            <Button
              style={{ padding: "10px 10px", borderRadius: "4px" }}
              variant="contained"
              size="large"
              color="secondary"
              onClick={submitReview}
            >
              <Typography variant="h5">Add Review</Typography>
            </Button>
          </div>
        </>
      )}
      {reviews.details && (
        <div style={{ padding: "20px 0" }}>
          <Typography variant="h4">Your Review</Typography>
          <Rating
            value={reviews.details.rating}
            precision={0.1}
            disabled
            name="avg-rate"
            //   style={{ display: "inline-flex" }}
          />
          <div style={{ paddingLeft: 10 }}>
            <Typography variant="body">{reviews.details.review}</Typography>
          </div>
          <div
            style={{
              paddingTop: 20,
            }}
          >
            <Button
              style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#ee2222",
              }}
              variant="contained"
              color="secondary"
              onClick={deleteRev}
              startIcon={<Delete />}
            >
              Delete Review
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserReviewSection;
