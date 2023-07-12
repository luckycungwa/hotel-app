import "./css/form.css";
import "./css/card.css";
import "./css/facility.css";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// Imports for user authentication | FIREBASE
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Signin() {
  //const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState(""); //change defaulkts to match info from the database/
  const [userPass, setUserPass] = useState(""); //change defaulkts to match info from the database/authentication etc.

  //user registeration & authentication
  const Register = () => {
    const authUser = getAuth();
    createUserWithEmailAndPassword(
      authUser, //user authentication as the first object
      
      userEmail,
      userPass
    )
      .then(() => {
        alert("Registred successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  };

  const handleRegister = () => {
    if (!userEmail) {
      alert("Fill in form!"); // Alert the user if they did not filll in the task
      return;
    } else {
      Register();
    }
  };

  return (
    <>
      <div className="form-section form-card glass">
        <div>
          <h2 className="title-3">REGISTER</h2>
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
                  placeholder="email"
                  type="text/email"
                  autoComplete="on"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
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

            <div className="icon-area">
              <button className="btn cta primary" onClick={handleRegister}>REGISTER</button>

              <button className="btn cta primary right">
                LOGIN
              </button>
              <br></br>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
