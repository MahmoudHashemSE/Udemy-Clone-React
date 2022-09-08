import React from "react";
import styles from "../../styles/CoursePage/sidebar.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";

function Sidebar({ course, footerRef, footerOnScreen, topContainerOnScreen }) {
  var footerLocation = footerRef.current
    ? footerRef.current.offsetTop - 845
    : 0;
  const sidebarStyle = {
    width: "20rem",
    zIndex: "7",
    borderBottom: "1px solid #d1d7dc",
    boxSizing: "borderBox",
    boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
    backgroundColor: "white",
    position: topContainerOnScreen ? "absolute" : "fixed",
    top: topContainerOnScreen ? "5rem" : "0",
    transform: "translateX(43rem)",
  };
  if (topContainerOnScreen) {
    sidebarStyle.top = "5.5rem";
    sidebarStyle.position = "absolute";
  } else if (footerOnScreen) {
    sidebarStyle.position = "absolute";
    sidebarStyle.top = footerLocation;
    sidebarStyle.zIndex = "3";
  }
  return (
    <div className="webpage" style={sidebarStyle}>
      {(footerOnScreen || topContainerOnScreen) && (
        <div className={styles.courseImg}>
          <img alt="Course" width={"100%"} height={"auto"} src={course.image} />
          <div className={styles.iconContainer}>
            <PlayArrowIcon
              fontSize="large"
              style={{ color: "black", transform: "scale(130%)" }}
            />
          </div>
          <div className={styles.mask}></div>
          <div className={styles.preview}>Preview this course</div>
        </div>
      )}
      <div style={{ padding: "1rem 22px" }}>
        <div className={styles.courseInfo}>
          <h3 className={styles.price}>E£{course.price}</h3>
          <div className={styles.purpleButton}>
            <h3>Add to cart</h3>
          </div>
          <div className={styles.whiteButton}>
            <h3>Buy now</h3>
          </div>
          <p className={styles.moneyBack}>30-Day Money-Back Guarantee</p>
          <div className={styles.courseIncludes}>
            <h3>This course includes:</h3>
            <div>
              <OndemandVideoOutlinedIcon
                className={styles.checkMark}
                fontSize="small"
              />
              <p>{8.5} hours on-demand video</p>
            </div>
            <div>
              <DescriptionOutlinedIcon
                className={styles.checkMark}
                fontSize="small"
              />
              <p>3 article</p>
            </div>
            <div>
              <BrowserUpdatedIcon
                className={styles.checkMark}
                fontSize="small"
              />
              <p>2 downloadable resources</p>
            </div>
            <div>
              <AllInclusiveIcon className={styles.checkMark} fontSize="small" />
              <p>Full lifetime access</p>
            </div>
            <div>
              <MobileFriendlyIcon
                className={styles.checkMark}
                fontSize="small"
              />
              <p>Access on mobile and TV</p>
            </div>
            <div>
              <WorkspacePremiumIcon
                className={styles.checkMark}
                fontSize="small"
              />
              <p>Certificate of completion</p>
            </div>
          </div>
          <div className={styles.share}>
            <h3>Share</h3>
            <h3>Gift this course</h3>
            <h3>Apply Coupon</h3>
          </div>
        </div>
      </div>
      <div className={styles.udemyAd}>
        <article>
          <h3>Training 5 or more people?</h3>
          <p>
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
        </article>
        <div className={styles.whiteButton}>
          <h3>Try Udemy Business</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
