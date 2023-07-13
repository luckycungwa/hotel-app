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
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Sign in</NavLink>
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