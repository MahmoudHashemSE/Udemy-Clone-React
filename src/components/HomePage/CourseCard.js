import React from "react";
import stars from "../../media/stars.png";
import Rating from '@mui/material/Rating';
import styles from "../../css/styles/HomePage/courseCard.module.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className={styles.link}>
      <div className={styles.card}>
        <img
          className={styles.border}
          alt="Course"
          width={240}
          height={135}
          src={course.image}
        />
        <article className={styles.courseTitle}>
          <h3>{course.title}</h3>
          <h6 className={styles.instructors}>{course.author}</h6>
        </article>
        <div className={styles.courseRating}>
          <h3 className={styles.ratingNumber}>{course.rating}</h3>
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          <h3 className={styles.reviewsNumber}>({course.people})</h3>
        </div>
        <h3 style={{ fontWeight: "800" }}>E£{course.price}</h3>
        {course.bestseller && (
          <aside className={styles.bestseller}>Bestseller</aside>
        )}
      </div>
    </Link>
  );
};

export default CourseCard;
