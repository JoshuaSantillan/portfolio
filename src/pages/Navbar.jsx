import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-page">
      <ul>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/projectsgallery" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/backlog" activeClassName="active">Backlog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
