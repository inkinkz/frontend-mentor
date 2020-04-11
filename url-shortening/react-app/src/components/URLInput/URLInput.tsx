import React, { useState, useEffect } from "react";
import "./URLInput.scss";
import Button from "../Button/Button";
import { LinkPair } from "../../shared/interfaces/interfaces";
const relink = "https://rel.ink/api/links/";

const URLInput = (props: {
  linksList: LinkPair[];
  setLinksList: React.Dispatch<React.SetStateAction<LinkPair[]>>;
}) => {
  const [errorClass, setErrorClass] = useState("hidden");
  const [inputClass, setInputClass] = useState("link-input");
  const [containerStyle, setContainerStyle] = useState({});
  const [link, setLink] = useState("");

  const getShortLink = async (url: object) => {
    const response = await fetch(relink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    });
    const json = await response.json();

    return json.hashid;
  };

  const shortenLink = async () => {
    if (link.trim() === "") {
      // show input error
      setErrorClass("error-text");
      setInputClass("link-input error");
      updateSize();

      // setContainerStyle({ top: "988px", height: "184px" });
    } else {
      // revert input back
      if (errorClass === "error-text") {
        setErrorClass("hidden");
        setInputClass("link-input");
        setContainerStyle({});
      }

      const url = { url: link.trim() };
      const hashid = await getShortLink(url);
      if (hashid) {
        const state = [...props.linksList];
        state.push({ original: link, short: `https://rel.ink/${hashid}` });
        props.setLinksList(state);
        setLink("");
      } else {
        alert("Invalid URL");
      }
    }
  };

  const updateSize = () => {
    console.log("updateSize");
    if (errorClass === "error-text") {
      if (window.innerWidth < 979) {
        setContainerStyle({ top: "988px", height: "184px" });
      }
    } else {
      setContainerStyle({});
    }
  };

  // useEffect(() => {
  //   updateSize();
  // });

  window.addEventListener("resize", updateSize);

  const onEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.keyCode === 13) shortenLink();
  };

  return (
    <div className="link-shorten-container" style={containerStyle}>
      <input
        value={link}
        className={inputClass}
        placeholder="Shorten a link here..."
        onChange={(e) => setLink(e.target.value)}
        onKeyDown={(e) => onEnter(e)}
      />
      <div className={errorClass}>Please add a link</div>
      <Button
        className="large"
        style={{
          margin: "0",
          height: "64px",
          borderRadius: "12px",
        }}
        onClick={shortenLink}
      >
        Shorten It!
      </Button>
    </div>
  );
};

export default URLInput;
