import "./css/form.css";
import "./css/card.css";
import "./css/facility.css";
import React from "react";
import { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
  //const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState(""); //change defaulkts to match info from the database/
  const [userPass, setUserPass] = useState(""); //change defaulkts to match info from the database/authentication etc.

const navPage = useHistory();

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
        //redirect user if their login was successful
        navPage.push("/Booking");
      })
      .catch((error) => {
        console.log(error);
        alert("Please Register to make a reservation!");

      });
  };

  return (
    <>
      <div className="form-section form-card glass">
        <div>
          <h2 className="title-3">LOGIN</h2>
        </div>
        <div className="">
          <div className="">
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
                <NavLink to="/" className="card-footer left">
                  forgot password
                </NavLink>
                <br />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="icon-area">
              <button className="btn cta primary" onClick={handleLogin}>
                LOGIN
              </button>

              <button className="btn cta primary right" onClick={() =>navPage.push("/Register")}>REGISTER</button>
              <br></br>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
