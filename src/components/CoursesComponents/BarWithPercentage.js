import React from "react";
import styles from "../../styles/CoursePage/studentFeedback.module.css";
import LinearDeterminate from "./LinearDeterminate";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function BarWithPercentage({ stars, percentage }) {
  return (
    <div className={styles.barContainer} styles={{ width: "100%" }}>
      <LinearDeterminate value={percentage} />
      <Rating
        style={{ fontSize: "1.4rem", margin: "0 0.5rem" }}
        name="text-feedback"
        value={stars}
        readOnly
        precision={0.5}
        emptyIcon={
          <StarIcon className={styles.star} style={{ fontSize: "1.4rem" }} />
        }
      />
      <div style={{width:"3rem"}}>
        <h6 className={styles.percentageText}>{percentage}%</h6>
      </div>
    </div>
  );
}

export default BarWithPercentage;
