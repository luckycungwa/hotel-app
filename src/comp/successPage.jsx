import React from "react";
import "./css/landingPage.css";
import { NavLink } from "react-router-dom";

function SuccessPage() {
  return (
    <>
      <div className="hero">
        <div className=""></div>
        <div className="hero-text center">
          <h2 className="title-2 white  anim-text">H O O O R A Y! </h2>
          <p className="title-display white  anim-text">CONGRADULATION </p>
          <h2 className="title white  anim-text">Your BOOKING HAS BEEN RESERVED</h2>
          <br />
          <br />
          <div className=" anim-icon">
            <img
              src="./approve.png"
              alt="corousel"
              className="img-card anim-icon"
            />
          </div>
          <NavLink to="/" className=" anim-icon">
            
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
