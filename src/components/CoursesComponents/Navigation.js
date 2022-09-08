import React, { useState, useContext } from "react";
import styles from "../../styles/CoursePage/navigation.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { refsContext } from "../../pages/CoursePage";
const buttonStyle = {
  fontSize: "11px",
  color: "#6a6f73",
  fontWeight: "800",
};

function Navigation() {
  const {
    whatYouLearnRef,
    contentRef,
    instructorRef,
    reviewRef,
    value,
    setValue,
  } = useContext(refsContext);

  const navStyle = {
    width: "100%",
    backgroundColor: "#fff",
    color: "#1c1d1f",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)",
  };

  return (
    <div style={navStyle}>
      <div className={styles.tabs}>
        <Tabs
          value={value}
          sx={{
            "& button": { ...buttonStyle },
            "& button.Mui-selected": { color: "black" },
          }}
          TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
          aria-label="secondary tabs example"
        >
          <Tab
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="overview"
            label="OVERVIEW"
            onClick={() => {
              var topOfElement = whatYouLearnRef.current.offsetTop - 150;
              window.scroll({ top: topOfElement, behavior: "smooth" });
              setValue("overview");
            }}
          />
          <Tab
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="curriculum"
            label="CURRICULUM"
            onClick={() => {
              var topOfElement = contentRef.current.offsetTop - 127;
              window.scroll({ top: topOfElement, behavior: "smooth" });
              setValue("curriculum");
            }}
          />
          <Tab
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="instructor"
            label="INSTRUCTOR"
            onClick={() => {
              var topOfElement = instructorRef.current.offsetTop - 130;
              window.scroll({ top: topOfElement, behavior: "smooth" });
              setValue("instructor");
            }}
          />
          <Tab
            sx={{ padding: "0 3rem" }}
            className={styles.tab}
            value="reviews"
            label="REVIEWS"
            onClick={() => {
              var topOfElement = reviewRef.current.offsetTop - 127;
              window.scroll({
                top: topOfElement,
                behavior: "smooth",
                block: "end",
              });
              setValue("reviews");
            }}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default Navigation;
