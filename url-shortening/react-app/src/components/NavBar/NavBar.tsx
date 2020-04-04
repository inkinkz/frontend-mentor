import React from "react";
import "./NavBar.scss";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="flex">
        <h1 className="logo">Shortly</h1>
        <ul className="nav-links">
          <li className="link-item">Features</li>
          <li className="link-item">Pricing</li>
          <li className="link-item">Resources</li>
        </ul>
      </div>
      <ul className="right-buttons">
        <li className="link-item">Login</li>
        <li>
          <Button className="small" style={{ marginLeft: "40px" }}>
            Sign Up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
