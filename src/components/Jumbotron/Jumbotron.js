import React from 'react';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import JumbotronStyle from './Jumbotron.style';
import profilepic from '../../assets/images/profilepic.jpg';
import useWindowSize from '../../utils/hooks/useWindowSize';
import useSpacing from '../../utils/hooks/useSpacing';
import JumbotronState from './Jumbotron.state';
import LinkStyled from '../Link/Link.styled';

export default function Jumbotron() {
    const { isLoaded } = JumbotronState();
    const { width } = useWindowSize();
    const { padding } = useSpacing();

    return (
        <JumbotronStyle width={width} isLoaded={isLoaded} padding={padding}>
            <div className="jumbotron">
                <div className="heading">
                    <div>
                        <h1>Frontend <span>UI/<span>UX</span></span> Web Developer</h1>
                        <ul>
                            <li className="github">
                                <a href="https://github.com/TristinCodingham" target="_blank" rel="noreferrer">
                                    <FaGithubSquare />
                                </a>
                            </li>
                            <li className="twitter">
                                <a href="https://twitter.com/Codingham" target="_blank" rel="noreferrer">
                                    <FaTwitterSquare />
                                </a>
                            </li>
                            <li className="linkedin">
                                <a href="https://www.linkedin.com/in/tristincodingham/" target="_blank" rel="noreferrer">
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                        <p>
                            I build accessible, SEO-friendly 
                            websites with meaningful semantics 
                            and memorable experiences.
                        </p>
                    </div>
                    <img src={profilepic} alt="Tristin Cunningham profile" />
                </div>
                <div className="info">
                    <LinkStyled to="/contact">Hire</LinkStyled>
                    <LinkStyled ghost to="/about">Learn More</LinkStyled>
                </div>
            </div>
        </JumbotronStyle>
    )
}
