import React from "react";
import "./MainFooter.scss";

import FacebookIcon from "../../shared/images/icon-facebook.svg";
import TwitterIcon from "../../shared/images/icon-twitter.svg";
import PinterestIcon from "../../shared/images/icon-pinterest.svg";
import InstagramIcon from "../../shared/images/icon-instagram.svg";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container flex">
        <div className="footer-title">Shortly</div>
        <div className="footer-links">
          <ul>
            <li className="link-title">Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="link-title">Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="link-title">Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="/">
            <img src={FacebookIcon} alt="fb" />
          </a>
          <a href="/">
            <img src={TwitterIcon} alt="twitter" />
          </a>
          <a href="/">
            <img src={PinterestIcon} alt="pinterest" />
          </a>
          <a href="/">
            <img src={InstagramIcon} alt="ig" />
          </a>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor.
        </a>
        &nbsp; Coded by{" "}
        <a href="https://www.github.com/inkinkz" rel="noopener noreferrer">
          inkinkz
        </a>
        .
      </div>
    </footer>
  );
};

export default MainFooter;
