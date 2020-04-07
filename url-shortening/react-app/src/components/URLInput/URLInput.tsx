import React from "react";
import "./URLInput.scss";
import Button from "../Button/Button";

const URLInput = () => {
  return (
    <div className="link-shorten-container">
      <input
        className="link-input"
        placeholder="Shorten a link here..."
      ></input>
      <Button
        className="large"
        style={{
          margin: "0",
          marginLeft: "2rem",
          height: "4rem",
          borderRadius: "12px",
        }}
      >
        Shorten It!
      </Button>
    </div>
  );
};

export default URLInput;
