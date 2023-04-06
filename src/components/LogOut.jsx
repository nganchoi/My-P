import React from "react";

function LogoutButton() {
  function handleLogout() {
    window.location.href = "/home";
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
