import React from "react";
import style from "./CoursesSection.module.css";

const SectionDescription = (props) => {
  return (
    <>
      <h1>A broad selection of courses</h1>
      <h3>
        Choose from 185,000 online video courses with new additions published
        every month
      </h3>
      <div id={style.tabsHeaders}>
        <h4 className={`${style.tab} ${style.activeTab}`}>Python</h4>
        <h4 className={style.tab}>Excel</h4>
        <h4 className={style.tab}>Web Development</h4>
        <h4 className={style.tab}>JavaScript</h4>
        <h4 className={style.tab}>Data Science</h4>
        <h4 className={style.tab}>AWS Certification</h4>
        <h4 className={style.tab}>Drawing</h4>
      </div>
      <div className={style.coursesFrame}>
        <h2>Expand your career oppurtunities</h2>
        <p>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to
        </p>
        <button id={style.exploreBtnTabName} className={style.exploreBtn}>
          Explore Python
        </button>
        {props.children}
      </div>
    </>
  );
};

export default SectionDescription;
