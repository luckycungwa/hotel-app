import "./css/form.css";
import React from "react";

function Login() {
  return (
    <>
      <div className="">
        <form>
          <label for="fname">EMAIL ADDRESS</label>
          <input type="text" id="fname" name="fname" />
          <label for="lname">PASSWORD</label>
          <input type="text" id="lname" name="lname" />
          <br/>
          <button className="btn primary">LOGIN</button>
        </form>
      </div>
    </>
  );
}

export default Login;
