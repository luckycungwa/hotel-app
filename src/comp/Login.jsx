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
<<<<<<< HEAD
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
=======
      <div className="form-section glass">
        {/* <div className="">
          <img className="card-img" src="./login.jpg" alt="signup" />
        </div> */}
        <div className="form-field">
          <div class="form-field">
            <label class="" for="textinput">
              Username
            </label>
            <br />
            <div className="">
              <input type="text" placeholder="Username" />
            </div>
          </div>
          <br />
          <div class="form-field">
            <label class="" for="textinput">
              Password
            </label>
            <br />
            <div className="">
              <input type="password" placeholder="password" />
            </div>
          </div>
          <br />

          <div>
            <button className="btn cta primary">LOGIN</button>
          </div>
        </div>
        <div className="image card-img">
          <img className="card-img" src="./login.jpg" alt="signup" />
          <div className="card-info">
            <p className="text-1">LOG IN</p>
            <p className="text-1">WELCOME TO OUR HOTEL</p>
          </div>
        </div>
>>>>>>> 96fbf2ac45b0fe64dbde3d1bda85080ceab6afb7
      </div>
    </>
  );
}

export default Login;
