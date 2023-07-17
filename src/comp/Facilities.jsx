import React from "react";
import { NavLink } from "react-router-dom";
import Facility from "./Facility";

function Facilities() {
  return (
    <>
      <div className="">
        <Facility title="Spa & Pool" imgUrl="./02.jpg" />
        <Facility title="Amphitheatre" imgUrl="./01.jpg" />
        <Facility title="Beach Lounge" imgUrl="./05.jpg" />
        <Facility title="Bar Lounge" imgUrl="./bar.jpg" />
        <Facility title="free parking" imgUrl="./04.jpg" />
      </div>
    </>
  );
}

export default Facilities;
