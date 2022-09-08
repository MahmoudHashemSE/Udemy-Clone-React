import React, { forwardRef } from "react";

const Footer = forwardRef((props,  ref) => {
  return (
    <footer ref={ref}>
      <div className="web-logo" >
        <figure>
          <a href="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy logo"
              width="91"
              height="34"
            />
          </a>
        </figure>
      </div>
      <div style={{ padding: "1rem" }}>© 2022 Udemy, Mustafa Mahmoud.</div>
    </footer>
  );
});

export default Footer;
