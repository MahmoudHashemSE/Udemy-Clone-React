import React from "react";
import ContentAccordion from "./ContentAccordion";
import styles from "../../styles/CoursePage/courseContent.module.css";
import { forwardRef } from "react";

const CourseContent = forwardRef(({ course }, ref) => {
  let contents = "";
  if (course.content)
    contents = course.content.map((details, index) => (
      <ContentAccordion key={index} title={details[0]} info={details[1]} />
    ));

  //calculate number of lectures
  let lectures = 0;
  if (course.content)
    course.content.forEach((array) => {
      if (array[1]) lectures += array[1].length;
    });

  return (
    <div ref={ref} className={styles.main}>
      <h3>Course content</h3>
      <h6>
        {course.content?course.content.length:0} sections • {lectures} lectures
      </h6>
      <div className={styles.accordions}>
        {contents ? (
          contents
        ) : (
          <h6>We are currently working on adding this part to this course.</h6>
        )}
      </div>
    </div>
  );
});

export default CourseContent;
