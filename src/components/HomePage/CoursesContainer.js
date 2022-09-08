import React from "react";
import CourseCard from "./CourseCard";
import styles from "../../styles/HomePage/courseCard.module.css";
import CircularProgress from "@mui/material/CircularProgress";

function CoursesContainer({ courses, title, description }) {
  //max 3 lines for description
  const textStyle = {
    maxWidth: "79%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const coursesList = courses.map((course) => (
    <div className={styles.courseContent} key={course.id}>
      <CourseCard course={course}></CourseCard>
    </div>
  ));

  return (
    <div className={styles.coursesContainer}>
      <article className={`${styles.webpage} ${styles.pythonArticle}`}>
        <h3>{title}</h3>
        <p style={textStyle}>{description}</p>
      </article>
      <div
        className="webpage"
        style={{
          margin: "6px 0 30px 0",
          padding: "0",
          display: "flex",
          margin: "0px 0px 0px 1.8rem",
        }}
      >
        <a href="" className="white-button">
          <h3 className="explore-button">Explore Python</h3>
        </a>
      </div>
      <CircularProgress style={{margin:"auto"}} color="secondary" />
      <div className={styles.coursesPictures}>{coursesList}</div>
    </div>
  );
}

export default CoursesContainer;
