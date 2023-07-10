import "./css/form.css";
import React from "react";

function Login() {
  return (
    <>
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
      </div>
    </>
  );
}

export default Login;
