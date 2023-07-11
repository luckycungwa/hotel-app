import React from "react";
// navigation & routes import
import { NavLink } from "react-router-dom";
import "./css/nav.css";

function Navbar() {
  return (
    <>
      <div className="nav">
      
          <ul className="icon-area">
            <li>
              <NavLink to="/">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/">Sign in</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
      </div>
    </>
  );
}

export default Navbar;