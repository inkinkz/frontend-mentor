import React from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="App">
      <div className="banner">
        <div className="search-bar">
          <div className="search-items-container">
            <div className="search-item">
              <div className="search-text">Frontend</div>
              <div className="remove-button">
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="search-item">
              <div className="search-text">CSS</div>
              <div className="remove-button">
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          </div>

          <div className="clear-button">
            <div className="clear-text">clear</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
