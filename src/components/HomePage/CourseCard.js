import React, {useRef} from "react";
import styles from "../../css/styles/HomePage/courseCard.module.css";
import Rating from "@mui/material/Rating";
import CoursePopup from "./CoursePopup";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const cardRef = useRef();
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
        <div ref={cardRef} className={styles.courseRating}>
          <h3 className={styles.ratingNumber}>{course.rating}</h3>
          <Rating
            name="half-rating-read"
            defaultValue={course.rating}
            precision={0.5}
            readOnly
          />
          <h3 className={styles.reviewsNumber}>({course.people})</h3>
        </div>
        <h3 >E£{course.price}</h3>
        {course.bestseller && (
          <aside className={styles.bestseller}>Bestseller</aside>
        )}
        <div className={styles.popup}>
          <CoursePopup course={course} parent={cardRef} />
        </div>
      </div>
      
    </Link>
  );
};

export default CourseCard;
