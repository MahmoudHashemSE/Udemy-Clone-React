import React, { useState } from "react";
import "../styles/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";

function NavBar() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    //redirect to homepage with search queue
    window.location.href = searchText ? `/?search=${searchText}` : `/`;
  };
  
  return (
    <nav>
      <section className="nav-links">
        <div className="mobile">
          <a href="" className="shopping-cart">
            <MenuIcon />
          </a>
        </div>
        <div className="web-logo">
          <figure>
            <a href="/">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="Udemy logo"
                width="91"
                height="34"
              />
            </a>
          </figure>
        </div>
        <div className="navWebpage">
          <a href="" className="dark">
            <h3>Categories</h3>
          </a>
        </div>
        <div className="search-bar navWebpage" style={{ padding: "0 1rem" }}>
          <SearchIcon className="mui-search-icon" />
          <form className="form" action="" onSubmit={handleSearch}>
            <input
              type="search"
              id="course-search"
              name="search"
              value={searchText}
              style={{ width: "100%" }}
              placeholder="Search for anything"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input className="search-button" type="submit" value="Search" />
          </form>
        </div>
        <div className="udemy-business">
          <a href="" className="dark">
            <h3>Udemy Business</h3>
          </a>
        </div>
        <div className="teach-on-udemy">
          <a href="" className="dark">
            <h3>Teach on Udemy</h3>
          </a>
        </div>
        <div>
          <a href="" className="search-icon">
            <SearchIcon />
          </a>
          <a href="" className="shopping-cart">
            <ShoppingCartIcon />
          </a>
        </div>
        <div className="navWebpage button-margin">
          <a href="" className="white-button">
            <h3>Log in</h3>
          </a>
        </div>
        <div className="navWebpage button-margin">
          <a href="" className="sign-up">
            <h3>Sign up</h3>
          </a>
        </div>
        <div className="navWebpage lang">
          <a href="" className="language" style={{ padding: "5px 7px" }}>
            <LanguageIcon />
          </a>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
