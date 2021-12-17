import React from 'react';

import { NavLink } from 'react-router-dom';

import StyledFooter from '../styled/Footer';
import BackToTop from '../widgets/BackToTop';

export default function Footer() {
    return (
        <StyledFooter>
            <div className="mapouter"><div className="gmap_canvas"><iframe title="Map" width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Jeffreys%20bay&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
            <nav>
                <ul className="container-md">
                    <li>
                        <NavLink to="./assets/Tristin-Cunningham-Résumé.pdf" type="file" target="_blank" rel="noreferrer">
                            <i className="fas fa-id-card link-icon"></i>
                            <span>Résumé<i className="fas fa-external-link-alt"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://www.github.com/TristinCodingham" target="_blank" rel="noreferrer">
                            <i className="fab fa-github link-icon"></i>
                            <span>Github<i className="fas fa-external-link-alt"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://www.twitter.com/Codingham" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter link-icon"></i>
                            <span>Twitter<i className="fas fa-external-link-alt"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://www.codewars.com/users/Codingham" target="_blank" rel="noreferrer">
                            <i className="fas fa-code link-icon"></i>
                            <span>Codewars<i className="fas fa-external-link-alt"></i></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="c-t-a c-t-a-ghost">Hire</NavLink>
                    </li>
                </ul>
            </nav>
            <address className="container-sm">
                <h4>Address</h4>
                <small>
                    78 Mimosa Street<br />
                    Kabeljous<br />
                    Jeffreys Bay, 6330<br />
                    Eastern Cape, South Africa
                </small>
            </address>
            <div className="container-sm powered-by">
                <span>&copy; Copyright <time id="powered-by-date">{new Date().getFullYear() || 2021}</time>. All Rights Reserved. Powered by </span><h6>Tristin Cunningham</h6>
            </div>
            <BackToTop />
        </StyledFooter>
    )
}
