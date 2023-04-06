import Home from "./components/Home";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotePage from "./components/NotePage";
import SignInSignupWithLocalStorage from "./components/SignUpForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/SignInSignupWithLocalStorage"
        element={<SignInSignupWithLocalStorage />}
      />
      <Route path="/NotePage" element={<NotePage />} />
    </Routes>
  );
}

export default App;
