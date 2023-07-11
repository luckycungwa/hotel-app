import React from "react";
import "./css/landingPage.css";

function LandingPage() {
  return (
    <>
      <div className="hero">
        <img
          src="./bg02.jpg"
          alt="corousel"
          className="image corousel overlay"
        />
        <div className="overlay"></div>
        <div className="hero-text center">
          <h2 className="title-2 white">Welcome to </h2>
          <p className="title-display white">AQUATONE PALACE - </p>
          <p className="title white">Your Ultimate Caribbean Summer Escape</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
