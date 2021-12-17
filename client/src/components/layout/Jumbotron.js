import React from 'react';

import { NavLink } from 'react-router-dom';

import useWindowSize from '../../utils/useWindowSize';

import Socials from '../widgets/Socials';
import ProfilePic from '../layout/ProfilePic';
import StyledJumbotron from '../styled/Jumbotron';
import useSpacing from '../../utils/useSpacing';

export default function Jumbotron() {
    const { width } = useWindowSize();
    const { padding } = useSpacing();

    const isDesktop = width >= 768;

    return (
        <StyledJumbotron isDesktop={isDesktop} padding={padding}>
            <div className="header">
                <h1 title="User Interface/User Experience">Frontend <span className="accent-text">UI/UX</span> Web Developer</h1>
                <div className="profile">
                    <Socials />
                    <ProfilePic />
                </div>
            </div>
            <div className="intro">
                <p>
                    I build accessible, SEO-friendly 
                    websites with meaningful semantics 
                    and memorable experiences.
                </p>
                <NavLink to="/contact" className="c-t-a center-text" title="Lets chat &#9749">Hire</NavLink>
                <a href="#learn-more" className="c-t-a c-t-a-ghost center-text">Learn more</a>
            </div>
        </StyledJumbotron>
    )
}
