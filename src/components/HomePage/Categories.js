import React from "react";
import "../../styles/HomePage/Categories.css";
import Grid from "@mui/material/Grid";

function Categories() {
  return (
    <section className="top-categories">
      <h3>Top categories</h3>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={3} lg={4}>
          <div className="category-card">
            <div className="img-wrapper">
              <img
                alt=""
                src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              />
            </div>
            <h4>Design</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
            />
          </div>
          <h4>Development</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
            />
          </div>
          <h4>Marketing</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
            />
          </div>
          <h4>IT and Software</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
            />
          </div>
          <h4>Personal Development</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
            />
          </div>
          <h4>Business</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
            />
          </div>
          <h4>Photography</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
        <div className="category-card">
          <div className="img-wrapper">
            <img
              alt=""
              src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
            />
          </div>
          <h4>Music</h4>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Categories;
