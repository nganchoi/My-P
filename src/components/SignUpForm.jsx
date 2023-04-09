import React, { useEffect, useRef, useState } from "react";
import Box from "./Boxcenter";
import "./SignUpForm.styles.css";
function SignInSignupWithLocalStorage() {
  const Nickname = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("NickName");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  const handleClick = () => {
    if (
      Nickname.current.value &&
      email.current.value &&
      password.current.value
    ) {
      localStorage.setItem("Nickname", Nickname.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };
  return (
    <div className="big-container">
      <div className="loginContainer" style={{}}>
        <div className="loginmain" style={{}}>
          <div className="login-box">
            {showHome ? (
              <Box />
            ) : show ? (
              <div className="container">
                <h1>Hello {localName}</h1>
                <div className="login-sbox">
                  <input
                    className="input"
                    placeholder="Email"
                    type="text"
                    ref={email}
                  />
                </div>
                <div className="login-sbox">
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    ref={password}
                  />
                </div>
                <button className="signbtn" onClick={handleSignIn}>
                  Sign In
                </button>
              </div>
            ) : (
              <div className="container">
                <div className="login-sbox">
                  <input
                    className="input"
                    placeholder="Nickname"
                    type="text"
                    ref={Nickname}
                  />
                </div>
                <div className="login-sbox">
                  <input
                    className="input"
                    placeholder="Email"
                    type="text"
                    ref={email}
                  />
                </div>
                <div className="login-sbox">
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    ref={password}
                  />
                </div>
                <button className="signbtn" onClick={handleClick}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInSignupWithLocalStorage;
