import React, { useState } from "react";
import LoadingPage from "./LoadingPage";

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
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default Home;
