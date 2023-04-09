import React, { useState } from "react";
import LoadingPage from "./LoadingPage";
import "./Home.styles.css";

const Home = () => {
  const [showPage, setShowPage] = useState(false);

  function handleClick() {
    setShowPage(true);
  }
  if (showPage) {
    return <LoadingPage />;
  }

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="button button--piyo">
        <div className="button__wrapper">
          <button className="button button__text" onClick={handleClick}>
            CLICK ME
          </button>
        </div>
        <div className="characterBox">
          <div className="character wakeup">
            <div className="character__face"></div>
          </div>
          <div className="character wakeup">
            <div className="character__face"></div>
          </div>
          <div className="character">
            <div className="character__face"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
