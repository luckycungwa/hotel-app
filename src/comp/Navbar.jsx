import React from "react";
// navigation & routes import
import { NavLink } from "react-router-dom";
import "./css/nav.css";

function Navbar() {
  return (
    <>
      <div className="nav right">
      
          <ul className="icon-area">
            <li>
              <NavLink className="navItem" to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink className="navItem" to="/Rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink className="navItem" to="/Login">Sign in</NavLink>
            </li>
            <li>
              <NavLink className="navItem" to="/">Contact</NavLink>
            </li>
          </ul>
      </div>
    </>
  );
}

export default Navbar;