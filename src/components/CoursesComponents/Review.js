import React, { useState } from "react";
import styles from "../../styles/CoursePage/review.module.css";

import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Review = ({ review }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const likeHandle = () => {
    if (!like && dislike) setDislike(false);
    setLike((like) => !like);
  };
  const dislikeHandle = () => {
    if (like && !dislike) setLike(false);
    setDislike((like) => !like);
  };
  return (
      <div className={styles.review}>
        <div className={styles.userInfo}>
          <Avatar sx={{ bgcolor: "#1c1d1f", fontWeight: "600" }}>
            {review.userInitials}
          </Avatar>
          <div className={styles.userTitle}>
            <h4>{review.userTitle}</h4>
            <div className={styles.rating}>
              <Rating
                style={{ fontSize: "1.1rem", margin: "0 0.5rem" }}
                name="text-feedback"
                value={review.rating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon
                    className={styles.star}
                    style={{ fontSize: "1.1rem" }}
                  />
                }
              />
              <h5 className={styles.time}>
                {review.created_formatted_with_time_since}
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{review.content}</p>
        </div>
        <div className={styles.feedback} >
          {(!like && !dislike)&&<p>Helpful?</p>}
          {(like || dislike) && <p>Thank you for feedback</p>}
          {!like && (
            <IconButton onClick={likeHandle}>
              <ThumbUpOffAltIcon />
            </IconButton>
          )}
          {like && (
            <IconButton onClick={likeHandle}>
              <ThumbUpIcon />
            </IconButton>
          )}
          {!dislike && (
            <IconButton onClick={dislikeHandle}>
              <ThumbDownOffAltIcon />
            </IconButton>
          )}
          {dislike && (
            <IconButton onClick={dislikeHandle}>
              <ThumbDownIcon />
            </IconButton>
          )}
        </div>
      </div>
  );
};

export default Review;
