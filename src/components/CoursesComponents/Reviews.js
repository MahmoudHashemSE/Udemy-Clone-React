import React, { forwardRef } from "react";
import Review from "./Review";
import styles from "../../styles/CoursePage/reviews.module.css";

const Reviews = forwardRef(({ course }, ref) => {
  let reviews = "";
  if (course.reviews)
    reviews = course.reviews.map((review, index) => (
      <Review key={index} review={review} />
    ));
  if (course.reviews)
    return (
      <div ref={ref} className={styles.container}>
        <h3 style={{ marginBottom: "1rem" }}>Reviews</h3>
        <div>{reviews}</div>
      </div>
    );
});

export default Reviews;
