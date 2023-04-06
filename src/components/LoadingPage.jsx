import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

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
    height: "5px",
    backgroundColor: "red",
    transition: "width 0.1s ease-out",
  };
  if (progress < 100) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "400px",
            padding: "20px",
            border: "1px solid black",
            textAlign: "center",
          }}
        >
          <div>{progress}%</div>
          <h1>
            "I'm adjusting everything in your thinking,hold your breath and wait
            a moment..."
          </h1>
          <div style={loadingBarStyles}></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="load-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: "400px",
              padding: "20px",
              border: "1px solid black",
              textAlign: "center",
            }}
          >
            "Everything is okay now, you can take a deep breath and smile!"
            <br />
            "If you still feel uncomfortable, please click on the relaxation
            button to continue."
            <br />
            <br />
            <br />
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
