import React from "react";
// navigation & routes import
import { NavLink } from "react-router-dom";
import "./css/nav.css";
import LandingPage from "./LandingPage";
import Facilities from "./Facilities";

function Home() {
  return (
    <>
      <LandingPage
        source={"../header-vid.mp4"}
        title={"AQUATONE PALACE "}
        subTitle={"Welcome to"}
        caption={"Your Ultimate Caribbean Summer Escape"}
        type={"video/mp4"}
      />

      <div className="card-section center">
        <div className="wrap-l">
          <br />
          <br />
          <h1 className="title-3">OUR FACILITIES</h1>
          <p className="description">
            Step into a world of elegance and relaxation as you enter our
            meticulously designed rooms and suites. Immerse yourself in the
            vibrant colors and soothing textures inspired by the Caribbean's
            natural beauty. Each accommodation is thoughtfully appointed with
            modern comforts, ensuring a serene and comfortable stay for every
            guest.
          </p>
          <br />
          <br />
        </div>
      </div>

      <Facilities />
    </>
  );
}

export default Home;
