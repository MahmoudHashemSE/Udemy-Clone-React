import React from "react";
import styles from "../../styles/CoursePage/courseBlackBar.module.css";
import StarIcon from "@mui/icons-material/Star";
import Navigation from "./Navigation";

function CourseBlackBar({ course, topContainerOnScreen }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div style={{ padding: "0.7rem 1.5rem" ,  overflow:"hidden"}}>
            <h3 className={styles.title}>{course.title}</h3>
            <span className={styles.reviews}>
              {course.bestseller && (
                <aside className={styles.bestseller}>Bestseller</aside>
              )}
              <h3 className={styles.ratingNumber}>{course.rating}</h3>
              <StarIcon fontSize="small" className={styles.star} />
              <h3 className={styles.reviewsNumber}>
                ({course.people} ratings)
              </h3>
            </span>
          </div>
          <div className={styles.whiteButton} style={{ margin: "0.7rem 1.5rem" }}>
            <h3>Buy now</h3>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        {!topContainerOnScreen && <Navigation />}
      </div>
    </>
  );
}

export default CourseBlackBar;
