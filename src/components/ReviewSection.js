import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { getReviewsAll } from "../API/Get";

function ReviewSection({ productId }) {
  const [reviews, setReviews] = useState({});
  const [avgRate, setAvgRate] = useState(0);

  useEffect(() => {
    setAvgRate(reviews?.average_rating);
  }, [reviews]);

  useEffect(() => {
    getReviewsAll(productId, setReviews);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Rating value={avgRate} precision={0.1} disabled name="avg-rate" />
      <span className="inline-reviewcount">{reviews?.count} Reviews</span>
      {reviews.results &&
        reviews?.results.map((rev) => {
          return (
            <div
              style={{ padding: "10px 0px", borderBottom: "1px solid #ddd" }}
            >
              <Typography variant="h6" className="inline-reviewcount">
                {rev.user.full_name}
              </Typography>
              <Rating
                value={rev.rating}
                size="small"
                precision={0.5}
                disabled
                name="avg-rate"
                //   style={{ display: "inline-flex" }}
              />
              <div style={{ paddingLeft: 10 }}>
                <Typography variant="body">{rev.review}</Typography>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ReviewSection;
