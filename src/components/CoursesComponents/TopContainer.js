import React, { forwardRef } from "react";
import styles from "../../styles/CoursePage/topContainer.module.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Navigation from "./Navigation";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TopContainer = forwardRef(({ course, topContainerOnScreen }, ref) => {
  const breadcrumbs = [
    <h3 key="1" className={styles.breadCrumb}>
      Development
    </h3>,
    <h3 key="3" className={styles.breadCrumb}>
      {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
    </h3>,
  ];
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Breadcrumbs
            className={styles.breadCrumb}
            separator="›"
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <div className={styles.courseImg}>
            <img
              alt="Course"
              width={"100%"}
              height={"auto"}
              src={course.image}
            />
            <div className={styles.iconContainer}>
              <PlayArrowIcon
                fontSize="large"
                style={{ color: "black", transform: "scale(130%)" }}
              />
            </div>
            <div className={styles.preview}>Preview this course</div>
            <div className={styles.mask}></div>
          </div>
          <h3>{course.title}</h3>
          <p>
            {course.description ||
              "This is a default description for the course. Please make sure to add a description to this course to the data base."}
          </p>
          <span className={styles.reviews}>
            {course.bestseller && (
              <aside className={styles.bestseller}>Bestseller</aside>
            )}
            <h3 className={styles.ratingNumber}>{course.rating}</h3>
            <Rating
              className={styles.rating}
              style={{ fontSize: "medium" }}
              name="text-feedback"
              value={course.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon
                  className={styles.star}
                  style={{ fontSize: "medium" }}
                />
              }
            />
            <h3 className={styles.reviewsNumber}>({course.people} ratings)</h3>
          </span>
          <span>
            <h6>Created by </h6>
            <h5>{course.author}</h5>
          </span>
        </div>
      </div>
      <Navigation topContainerOnScreen={topContainerOnScreen}/>
    </div>
  );
});

export default TopContainer;
