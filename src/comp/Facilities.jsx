import React from "react";
import { NavLink } from "react-router-dom";
import Facility from "./Facility";

function Facilities() {
  return (
    <>
      <div className="">
        <Facility title="Swimming Pool" imgUrl="./02.jpg" />
        <Facility title="Swimming Pool" imgUrl="./01.jpg" />
        <Facility title="Swimming Pool" imgUrl="./05.jpg" />
        <Facility title="Swimming Pool" imgUrl="./04.jpg" />
      </div>
    </>
  );
}

export default Facilities;
