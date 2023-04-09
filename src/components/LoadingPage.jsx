import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoadingPage.styles.css";

function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 300);

    setTimeout(() => {
      clearInterval(intervalId);
      setProgress(100);
    }, 15000);
  }, []);

  const loadingBarStyles = {
    width: `${progress}%`,
    height: "10px",
    backgroundColor: "red",
    transition: "width 0.1s ease-out",
    position: "relative",
    margin: "30px auto 0",
    overflow: "hidden",
  };
  if (progress < 100) {
    return (
      <div className="load-center">
        <div className="load-c-center">
          <div className="text">
            <div>{progress}%</div>
            <h1>
              "I'm adjusting everything in your thinking,hold your breath and
              wait a moment..."
            </h1>
          </div>
          <div className="loading-page">
            <div style={loadingBarStyles}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="load-center">
        <div className="load-c-center">
          <div className="text">
            "Everything is okay now, you can take a deep breath and smile!"
            <br />
            "If you still feel uncomfortable, please click on the relaxation
            button to continue."
            <br />
            <br />
            <br />
          </div>
          <div className="load-container">
            <Link to="/SignInSignupWithLocalStorage">
              <button
                type="button"
                class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-green-500 dark:hover:text-white"
              >
                Relax
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingPage;
