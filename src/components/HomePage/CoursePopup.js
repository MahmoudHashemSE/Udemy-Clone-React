import React, { useEffect, useState } from "react";
import styles from "../../css/styles/HomePage/coursePopup.module.css";
import CheckIcon from "@mui/icons-material/Check";
function CoursePopup({ course, parent }) {
  //get the position of the course card to determine where the popover appears
  const [parentOffset, setParentOffset] = useState(0);
  const update = () => {
    const x = parent.current.getBoundingClientRect().left;
    setParentOffset(x);
    // console.log(x, window.innerWidth)
  };
  useEffect(() => {
    update();
  }, [parent.current]);
  useEffect(() => {
    window.addEventListener("resize", update);
  }, []);
  //handling popover position
  let style = {
    top: "-3rem",
    left: "110%",
  };
  if (window.innerWidth <= 700) {
    style = {
      top: "10rem",
      left: "-10%",
      width: "100%",
    };
  } else if (window.innerWidth - parentOffset <= 550) {
    style = {
      top: "-3rem",
      left: "-120%",
    };
  }
  let learnings = "";
  if (course.learnings)
    learnings = course.learnings.slice(0, 3).map((learning, index) => (
      <div key={index}>
        <CheckIcon className={styles.checkMark} fontSize="small" />
        <p>{learning}</p>
      </div>
    ));
  return (
    <div className={styles.container} style={style}>
      <h3 className={styles.title}>{course.title}</h3>
      {course.bestseller && (
        <aside className={styles.bestseller}>Bestseller</aside>
      )}
      <h3 className={styles.hours}>{course.hours}</h3>
      <p>
        {course.description ||
          "This is a default description for the course. Please make sure to add a description to this course to the data base."}
      </p>
      <div className={styles.learnings}>
        {learnings ||
          "We are currently working on adding this part to this course."}
      </div>
    </div>
  );
}

export default CoursePopup;
