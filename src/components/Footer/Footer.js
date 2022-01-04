import React from 'react';

import FooterStyle from './Footer.style';
import LinkStyled from '../Link/Link.styled';
import useWindowSize from '../../utils/hooks/useWindowSize';
import useSpacing from '../../utils/hooks/useSpacing';

import resume from '../../assets/docs/Tristin-Cunningham-Résumé.pdf';

export default function Footer() {
    const { width } = useWindowSize();
    const { padding } = useSpacing();

    return (
        <FooterStyle width={width} padding={padding}>
            <div className="mapouter"><div className="gmap_canvas"><iframe title="Map" width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Jeffreys%20bay&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
            <nav>
                <ul>
                    <li>
                        <a href={resume} type="file" target="_blank" rel="noreferrer">
                            <i className="fas fa-id-card link-icon"></i>
                            <span>Résumé<i className="fas fa-external-link-alt"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/TristinCodingham" target="_blank" rel="noreferrer">
                            <i className="fab fa-github link-icon"></i>
                            <span>Github<i className="fas fa-external-link-alt"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/Codingham" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter link-icon"></i>
                            <span>Twitter<i className="fas fa-external-link-alt"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.codewars.com/users/Codingham" target="_blank" rel="noreferrer">
                            <i className="fas fa-code link-icon"></i>
                            <span>Codewars<i className="fas fa-external-link-alt"></i></span>
                        </a>
                    </li>
                    <li>
                        <LinkStyled to="/contact" className="c-t-a c-t-a-ghost">Hire</LinkStyled>
                    </li>
                </ul>
            </nav>
            <address>
                <h4>Address</h4>
                <small>
                    78 Mimosa Street<br />
                    Kabeljous<br />
                    Jeffreys Bay, 6330<br />
                    Eastern Cape, South Africa
                </small>
            </address>
            <div className="powered-by">
                <span>&copy; Copyright <time id="powered-by-date">{new Date().getFullYear() || 2021}</time>. All Rights Reserved. Powered by </span><h6>Tristin Cunningham</h6>
            </div>
        </FooterStyle>
    )
}
