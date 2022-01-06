import React from 'react'
import { NavLink } from 'react-router-dom';

import { FaBars, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import logo from '../../assets/images/tristinc.png';
import NavbarState from './Navbar.state';
import NavbarStyle from './Navbar.style';
import useSpacing from '../../utils/hooks/useSpacing';

export default function Navbar() {
    const { isNavOpen, handleNav, closeNav, width } = NavbarState();
    const { padding } = useSpacing();
    return (
        <NavbarStyle isNavOpen={isNavOpen} width={width} padding={padding}>
            <nav>
                <NavLink to="/" onClick={closeNav}><img src={logo} alt="Logo" height="25px" /></NavLink>
                <ul>
                    <li><NavLink to="/" onClick={closeNav} activeClassName=".active">Home</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeNav} activeClassName=".active">Contact</NavLink></li>
                    <li><NavLink to="/about" onClick={closeNav} activeClassName=".active">About</NavLink></li>
                    <li>
                        <a href="https://github.com/TristinCodingham" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <i className="github"><FaGithub /></i>
                    </li>
                    <li>
                        <a href="https://twitter.com/Codingham" target="_blank" rel="noreferrer">
                            Twitter
                        </a>
                        <i className="twitter"><FaTwitter /></i>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tristincodingham/" target="_blank" rel="noreferrer">
                            Linkedin
                        </a>
                        <i className="linkedin"><FaLinkedin /></i>
                    </li>
                </ul>
                <button onClick={handleNav}><FaBars /></button>
            </nav>
        </NavbarStyle>
    )
}
