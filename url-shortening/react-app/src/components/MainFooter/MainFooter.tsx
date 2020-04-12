import React from "react";
import "./MainFooter.scss";

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
          <a
            href="https://url-shortening.inkinkz.now.sh/"
            className="icon facebook-icon"
          >
            {" "}
          </a>
          <a
            href="https://url-shortening.inkinkz.now.sh/"
            className="icon twitter-icon"
          >
            {" "}
          </a>
          <a
            href="https://url-shortening.inkinkz.now.sh/"
            className="icon pinterest-icon"
          >
            {" "}
          </a>
          <a
            href="https://url-shortening.inkinkz.now.sh/"
            className="icon instagram-icon"
          >
            {" "}
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
