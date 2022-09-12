import React, { forwardRef } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "../css/styles/footer.module.css";
import Grid from "@mui/material/Grid";
const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref}>
      <div className={styles.linksAndLanguage}>
        <div className={styles.links}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Udemy Business</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Teach on Udemy</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Get the app</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>About us</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Contact us</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Careers</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Blog</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Help and Support</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Affiliate</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Investors</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Terms</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Privacy policy</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Cookie settings</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Sitemap</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h3 className={styles.footerLink}>Accessability statement</h3>
            </Grid>
          </Grid>
        </div>
        <div className={styles.languageButton}>
          <LanguageIcon /> <h3>English</h3>
        </div>
      </div>
      <div className={styles.footerLogo}>
        <div className="web-logo">
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
      </div>
    </footer>
  );
});

export default Footer;
