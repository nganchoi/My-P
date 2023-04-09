import React from "react";
import "./SignUpForm.styles.css";
import NotePage from "./NotePage";
import "./Boxcenter.styles.css";

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
    <div className="Boxcontainer">
      <p>Wellcome {localStorage.getItem("NickName")}</p>
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
