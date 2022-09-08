import React, {forwardRef} from "react";
import styles from "../../css/styles/CoursePage/whatYouWillLearn.module.css";
import CheckIcon from "@mui/icons-material/Check";

const WhatYouWillLearn = forwardRef(({ course }, ref) => {
  let learnings = "";
  if (course.learnings)
    learnings = course.learnings.map((learning, index) => (
      <div key={index}>
        <CheckIcon className={styles.checkMark} fontSize="small" />
        <p>{learning}</p>
      </div>
    ));

  return (
    <div id="whatYouWillLearn" ref={ref} className={styles.container}>
      <h3>What you'll learn</h3>
      <div className={styles.learnings}>
        {learnings}
      </div>
    </div>
  );
})

export default WhatYouWillLearn;
