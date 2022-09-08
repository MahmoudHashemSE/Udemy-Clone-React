import React, { useState } from "react";
import styles from "../../styles/CoursePage/description.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WhoIsThisCourseFor from "./WhoIsThisCourseFor";
function Description({ course }) {
  const [showMore, setShowMore] = useState("more");
  let descriptionDetailed = "";
  if (course.descriptionDetailed)
    //some text are bold and some are italic
    descriptionDetailed = course.descriptionDetailed.map((paragraph, index) => (
      <p
        key={index}
        style={{
          fontWeight: paragraph[paragraph.length - 1] === " " ? "800" : "unset",
          fontStyle:
            paragraph[paragraph.length - 2] === " " ? "italic" : "unset",
          marginBottom:
            paragraph[1] === "•" || paragraph[1] === "." ? "0.5rem" : "1rem",
        }}
      >
        {paragraph}
      </p>
    ));

  //count total number of words to decide if we want to show (Show more button)
  let n = 0;
  if (descriptionDetailed)
    course.descriptionDetailed.forEach((x) => {
      n += x.length;
    });
  const showMoreButton = n > 500;

  //if there is any description for the course
  return (
    <div className={styles.container}>
      {course.descriptionDetailed && (
        <h3 className={styles.title}>Description</h3>
      )}
      <div
        className={styles.descriptionDetailed}
        style={{
          height: showMore === "more" && showMoreButton ? "8.8rem" : "unset",
          WebkitMaskImage:
            showMore === "more" && showMoreButton
              ? "linear-gradient(#fff, #fff, rgba(255, 255, 255, 0))"
              : "unset",
        }}
      >
        {descriptionDetailed} <WhoIsThisCourseFor course={course} />
      </div>
      {showMoreButton && (
        <span style={{ width: "7rem", margin: "1rem 0" }}>
          <div
            className={styles.showMore}
            onClick={() =>
              setShowMore((showMore) => (showMore === "more" ? "less" : "more"))
            }
          >
            <h3>Show {showMore}</h3>
            <KeyboardArrowUpIcon
              style={{
                transform: showMore === "more" ? "rotate(180deg)" : "unset",
              }}
              fontSize="small"
            />
          </div>
        </span>
      )}
    </div>
  );
}

export default Description;
