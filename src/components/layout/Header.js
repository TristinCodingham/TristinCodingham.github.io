import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/tristinc.png';

import resume from "../../assets/Tristin-Cunningham-Résumé.pdf";

import StyledHeader from '../styled/Header';
import StyledNav from '../styled/Nav';
import Container from '../styled/Container';

import useWindowSize from "../../utils/useWindowSize";
import useSpacing from '../../utils/useSpacing';

export default function Header() {
    const { windowSize } = useWindowSize();
    const isDesktop = windowSize >= 768;
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const { padding } = useSpacing();

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <StyledHeader>
            <StyledNav isNavOpen={isNavOpen} isDesktop={isDesktop}>
                <Container padding={padding}>
                    <NavLink to="/" aria-label="Home" id="logo-link">
                        <img 
                            src={logo}
                            alt="Codingham Logo"
                            height="25"
                        />
                    </NavLink>
                    <button 
                        onClick={handleNav} 
                        id="nav-hamburger" 
                        aria-label="Navigation Menu"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Desktop Nav */}
                    <ul className="nav-ul-desktop">
                        <li>
                            <NavLink to="/" aria-label="Home" style={{padding: "0 10px"}}>
                                /Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" aria-label="About" style={{padding: "0 10px"}}>
                                /About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" aria-label="Contact" style={{padding: "0 10px"}}>
                                /Contact
                            </NavLink>
                        </li>
                    </ul>
                    {/* Mobile Nav */}
                    <ul className="nav-ul-mobile">
                        <li>
                            <NavLink to="/" onClick={handleNav} aria-label="Home">
                                /Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={handleNav} aria-label="About">
                                /About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={handleNav} aria-label="Contact">
                                /Contact
                            </NavLink>
                        </li>
                        <li>
                            <a href={resume} onClick={handleNav} type="file" target="_blank" rel="noreferrer" aria-label="Résumé">
                                Résumé
                            </a>
                            <i className="fas fa-external-link-alt" aria-label="External link"></i>
                        </li>
                        <li>
                            <a href="https://www.github.com/TristinCodingham" onClick={handleNav} target="_blank" rel="noreferrer" aria-label="Github">
                                Github
                            </a>
                            <i className="fas fa-external-link-alt" aria-label="External link"></i>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/Codingham" onClick={handleNav} target="_blank" rel="noreferrer" aria-label="Twitter">
                                Twitter
                            </a>
                            <i className="fas fa-external-link-alt" aria-label="External link"></i>
                        </li>
                        <li>
                            <a href="https://www.codewars.com/users/Codingham" onClick={handleNav} target="_blank" rel="noreferrer" aria-label="Codewars">
                                Codewars
                            </a>
                            <i className="fas fa-external-link-alt" aria-label="External link"></i>
                        </li>
                    </ul>
                </Container>
            </StyledNav>
        </StyledHeader>
    )
}
