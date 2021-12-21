import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import logo from '../../assets/images/tristinc.png';
import NavbarState from './Navbar.state';
import NavbarStyle from './Navbar.style';

export default function Navbar() {
    const { isNavOpen, handleNav, width } = NavbarState();
    return (
        <NavbarStyle isNavOpen={isNavOpen} width={width}>
            <nav>
                <Link to="/"><img src={logo} alt="Logo" height="25px" /></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <a href="https://github.com/TristinCodingham" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <div className="github"><FontAwesomeIcon icon={faGithub} /></div>
                    </li>
                    <li>
                        <a href="https://twitter.com/Codingham" target="_blank" rel="noreferrer">
                            Twitter
                        </a>
                        <div className="twitter"><FontAwesomeIcon icon={faTwitter} /></div>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tristincodingham/" target="_blank" rel="noreferrer">
                            Linkedin
                        </a>
                        <div className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></div>
                    </li>
                </ul>
                <button onClick={handleNav}><FontAwesomeIcon icon={faBars} /></button>
            </nav>
        </NavbarStyle>
    )
}
