import React from "react";
import CoursesList from "./CoursesList";
import style from "./CoursesSection.module.css";
import SectionDescription from "./SectionDescription";

const CoursesSection = () => {
  return (
    <section className={`${style.courses} ${style.paddedSection}`}>
      <SectionDescription>
        <CoursesList></CoursesList>
      </SectionDescription>
    </section>
  );
};

export default CoursesSection;
