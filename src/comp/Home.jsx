import React from "react";
// navigation & routes import
import { NavLink } from "react-router-dom";
import "./css/nav.css";
import LandingPage from "./LandingPage";
import Facilities from "./Facilities";

function Home() {
  return (
    <>
      <LandingPage/>
      
      <div className="center-div center">
        <h1 className="title-2">OUR FACILITIES</h1>
        <p className="description wrap-m ">
        Step into a world of elegance and relaxation as you enter our meticulously designed rooms and suites. Immerse yourself in the vibrant colors and soothing textures inspired by the Caribbean's natural beauty. Each accommodation is thoughtfully appointed with modern comforts, ensuring a serene and comfortable stay for every guest.
        </p>
      </div>
      <Facilities/>
      
    </>
  );
}

export default Home;