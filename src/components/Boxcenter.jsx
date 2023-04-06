import React from "react";
import "./SignUpForm.styles.css";
import NotePage from "./NotePage";
function Box() {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <p>Wellcome {localStorage.getItem("name")}</p>
      <button onClick={logout} className="logout">
        LogOut
      </button>
      <button onClick={deleteAccount} className="delete">
        Delete
      </button>
      <NotePage />
    </div>
  );
}
export default Box;
