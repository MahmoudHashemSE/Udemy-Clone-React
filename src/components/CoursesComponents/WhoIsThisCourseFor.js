import React from "react";
import styles from "../../css/styles/CoursePage/whoIsThisCourseFor.module.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function WhoIsThisCourseFor({ course }) {
  let whoIsThisFor = "";
  if (course.whoIsThisFor)
    whoIsThisFor = course.whoIsThisFor.map((requirement, index) => (
      <div key={index}>
        <FiberManualRecordIcon className={styles.icon} fontSize="small" />
        <p>{requirement}</p>
      </div>
    ));
  if (course.whoIsThisFor)
    return (
      <div className={styles.container}>
        <h3>Who this course is for:</h3>
        <div className={styles.whoIsThisFor}>
          {whoIsThisFor}
        </div>
      </div>
    );
}

export default WhoIsThisCourseFor;
