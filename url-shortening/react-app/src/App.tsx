import React from "react";
import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

import Button from "./components/Button/Button";

const App = () => {
  return (
    <React.Fragment>
      <header className="main-header">
        <div className="container">
          {/* Nav Bar */}
          <NavBar />
          {/* Header Content */}
          <Header />

          <div className="link-shorten-container">
            <input
              className="link-input"
              placeholder="Shorten a link here..."
            ></input>
            <Button>Shorten It!</Button>
          </div>
        </div>
      </header>

      <div className="statistics-container"></div>
    </React.Fragment>
  );
};

export default App;
