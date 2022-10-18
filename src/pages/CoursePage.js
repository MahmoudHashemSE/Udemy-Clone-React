import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useLayoutEffect,
} from "react";
import { useParams } from "react-router-dom";
import CourseBlackBar from "../components/CoursesComponents/CourseBlackBar";
import CourseContent from "../components/CoursesComponents/CourseContent";
import Instructor from "../components/CoursesComponents/Instructor";
import Requirements from "../components/CoursesComponents/Requirements";
import Sidebar from "../components/CoursesComponents/Sidebar";
import TopContainer from "../components/CoursesComponents/TopContainer";
import WhatYouWillLearn from "../components/CoursesComponents/WhatYouWillLearn";
import Description from "../components/CoursesComponents/Description";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StudentFeedback from "../components/CoursesComponents/StudentFeedback";
import Reviews from "../components/CoursesComponents/Reviews";
import { dataContext } from "../App";

const useOnScreen = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    let curRef = ref.current;
    if (curRef) {
      observer.observe(curRef);
    }
    return () => {
      observer.unobserve(curRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};

//to pass the refs to navigator
export const refsContext = createContext();
function CoursePage() {
  const { data } = useContext(dataContext);
  let courses = data ? data.courses : [];
  let instructors = data ? data.instructors : [];
  //extract course id from the url
  const params = useParams();
  const courseID = Number(params.ID);

  //initial navigation value
  const [value, setValue] = useState("overview");

  //get course id
  let course = 0;
  if (courses)
    courses.forEach(function (x) {
      if (x.id === courseID) {
        course = x;
      }
    });
  //get instructor
  let instructor = 0;
  if (instructors)
    instructors.forEach(function (x) {
      if (x.id === course.instructor) {
        instructor = x;
      }
    });

  const topContainerRef = useRef();
  const contentRef = useRef();
  const instructorRef = useRef();
  const reviewRef = useRef();
  const footerRef = useRef();
  const whatYouLearnRef = useRef();
  const footerOnScreen = useOnScreen(footerRef, "0px");
  const topContainerOnScreen = useOnScreen(topContainerRef, "-60px");

  return (
    <refsContext.Provider
      value={{
        whatYouLearnRef,
        contentRef,
        instructorRef,
        reviewRef,
        value,
        setValue,
      }}
    >
      <div className="home-page">
        <NavBar />
        <TopContainer
          ref={topContainerRef}
          course={course}
          topContainerOnScreen={topContainerOnScreen}
        />
        <div className="course-page-main">
          <div className="course-page-contents">
            <Sidebar
              course={course}
              footerRef={footerRef}
              footerOnScreen={footerOnScreen}
              topContainerOnScreen={topContainerOnScreen}
            />
            <WhatYouWillLearn ref={whatYouLearnRef} course={course} />
            <CourseContent course={course} ref={contentRef} />
            <Requirements course={course} />
            <Description course={course} />
            <Instructor ref={instructorRef} instructor={instructor} />
            <StudentFeedback course={course} />
            <Reviews ref={reviewRef} course={course} />
          </div>
        </div>
        <Footer ref={footerRef} />
        <CourseBlackBar
          course={course}
          topContainerOnScreen={topContainerOnScreen}
        />
      </div>
    </refsContext.Provider>
  );
}

export default CoursePage;
