import React from "react";
import { NavLink } from "react-router-dom";
import Facility from "./Facility";

function Facilities() {
  return (
    <>
      <div className="">
          <Facility/>
          <Facility/>
          <Facility/>
          <Facility/>
      </div>
    </>
  );
}

export default Facilities;
