import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ menuOpen, toggleMenu }) => {
    return (
        <div>
            <button className="burger" onClick={toggleMenu}>
                {menuOpen ? <FaTimes className='close-button' /> : <FaBars />}
            </button>
            <nav  onClick={toggleMenu} className={menuOpen ? 'nav-page open' : 'nav-page'}>
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
                    <NavLink to="/particles" activeclassname="active">Particles</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className="nav-desktop">
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
                    <NavLink to="/particles" activeclassname="active">Particles</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );

};

export default Navbar;
