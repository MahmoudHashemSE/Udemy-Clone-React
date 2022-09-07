import React from "react";
import style from "./Course.module.css";
const Course = (props) => {
  return (
    <div className={style.courseTemplate}>
      <img src={props.course.image} alt={props.course.title} />
      <div className={style.courseDescription}>
        <h4>{props.course.title}</h4>
        <div className={style.author}>{props.course.author}</div>
        <div className={style.rating}>
          {props.course.rating}
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        ({props.course.views})<h4>E£{props.course.price}</h4>
      </div>
    </div>
  );
};

export default Course;
