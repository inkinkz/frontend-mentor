import React from "react";
import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import URLInput from "./components/URLInput/URLInput";

// import Button from "./components/Button/Button";

const App = () => {
  return (
    <React.Fragment>
      <header className="main-header">
        <div className="container">
          {/* Nav Bar */}
          <NavBar />
          {/* Header Content */}
          <Header />
          {/* URL Shortener */}

          {/* <div className="wrapper"> */}
          {/* </div> */}
        </div>
      </header>
      <URLInput />

      <section className="statistics-container">
        <h1 className="section-title">
          Advanced Statistics
          <span
            className="lead text-center"
            style={{
              marginTop: "0.75rem",
              fontSize: "1.1rem",
              maxWidth: "500px",
              lineHeight: "2rem",
            }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </span>
        </h1>

        <div className="container flex cards-container">
          <div className="brand-recog card">
            <div className="card-title"> Brand Recognition</div>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </div>
          <div className="cyan-line"></div>
          <div className="detailed-records card">
            <div className="card-title">Detailed Records</div>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
          <div className="cyan-line"></div>
          <div className="fully-custom card">
            <div className="card-title">Fully Customizable</div>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
