import "./css/form.css";
import "./css/card.css";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
  //const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState(""); //change defaulkts to match info from the database/
  const [userPass, setUserPass] = useState(""); //change defaulkts to match info from the database/authentication etc.

  //Prevent user from submiting an empty form
  const ForceInput = (e) => {
    if (!userName) {
      alert("Fill in the form!"); // Alert the user if they did not filll in the task
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
      <div className="form-section glass">
        
        <div className="form-field">
          <div class="form-field">
            <label class="" for="textinput">
              Username
            </label>
            <br />
            <div className="">
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
          </div>
          <br />
          <div class="form-field">
            <label class="" for="textinput">
              Password
            </label>
            <br />
            <div className="">
              <input
                className=""
                placeholder="password"
                type="password"
                value={userPass}
                required
                autoComplete="off"
                //Disable handler until we complete Firebase Lessons
                onChange={(e) => setUserPass(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div>
            <button className="btn cta primary">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
