import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase";

function Login() {
  //const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState(""); //change defaulkts to match info from the database/
  const [userPass, setUserPass] = useState(""); //change defaulkts to match info from the database/authentication etc.

  //Prevent user from submiting an empty form
  const ForceInput = (e) => {
    if (!userName) {
      alert("You must add at least 1 task!"); // Alert the user if they did not filll in the task
      return;
    }
  };

  //user registeration & authentication
  const handleLogin = () => {
    ForceInput();

    const authUser = getAuth();

    signInWithEmailAndPassword(authUser, userName, userPass)
      .then(() => {
        alert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div className="main">
        <form className="form">
        <div className="form-field">
            <label for="fname">EMAIL ADDRESS</label>
            <br/>
            <input
                  autoFocus
                  className=""
                  placeholder="username or email"
                  type="text/email"
                  autoComplete="on"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  // force user to fill force
                  required
                />
        </div>
          
          <br/>

          <label for="lname">PASSWORD</label>
          <input
                  className=""
                  placeholder="password"
                  type="password"
                  value={userPass}
                  required
                  autoComplete="off"
                  //Disable handler until we complete Firebase Lessons
                  onChange={(e) => setUserPass(e.target.value)}
                  // force user to fill force
                />
          <br/>
          <button className="btn primary">LOGIN</button>
        </form>
      </div>
    </>
  );
}

export default Login;
