import React, { useState } from "react";

function SignUpForm() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(userData).every((val) => val !== "");
    if (!isFormValid) {
      alert("Please fill in all input fields before submitting.");
      return;
    }
    console.log(userData);

    setIsRegistered(true);
    setTimeout(() => {
      window.location.href = "/NotePage";
    }, 3000);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button
          type="submit"
          disabled={
            !Object.values(userData).every(
              (val) => val !== "Please fill in all the blanks"
            )
          }
        >
          Sign Up
        </button>
      </form>
      {isRegistered && (
        <p>
          Thank you for registering! You will be redirected to the welcome page
          in a few seconds.
        </p>
      )}
    </>
  );
}

export default SignUpForm;
