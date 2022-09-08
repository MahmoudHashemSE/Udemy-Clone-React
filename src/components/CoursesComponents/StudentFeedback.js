import React from "react";
import styles from "../../styles/CoursePage/studentFeedback.module.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import BarWithPercentage from "./BarWithPercentage";

function StudentFeedback({ course }) {
  const percentages = course.ratingsSplit;
  return (
    <div className={styles.container}>
      <h3 style={{ marginBottom: "1rem" }}>Student feedback</h3>
      <div className={styles.feedback}>
        <div className={styles.averageRating}>
          <h3 className={styles.ratingText}>4.4</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Rating
              className={styles.rating}
              style={{ fontSize: "1.4rem" }}
              name="text-feedback"
              value={course.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon
                  className={styles.star}
                  style={{ fontSize: "1.4rem" }}
                />
              }
            />
            <h3 className={styles.courseRating}>Course Rating</h3>
          </div>
        </div>
        <div className={styles.bars}>
          <BarWithPercentage stars={5} percentage={percentages[0]} />
          <BarWithPercentage stars={4} percentage={percentages[1]} />
          <BarWithPercentage stars={3} percentage={percentages[2]} />
          <BarWithPercentage stars={2} percentage={percentages[3]} />
          <BarWithPercentage stars={1} percentage={percentages[4]} />
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
