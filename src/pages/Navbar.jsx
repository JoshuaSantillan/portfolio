import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-page">
      <ul>
        <li>
          <NavLink to="/about" activeclassname="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeclassname="active">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/projectsgallery" activeclassname="active">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/backlog" activeclassname="active">Backlog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
