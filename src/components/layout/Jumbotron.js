import React from 'react';

import useWindowSize from '../../utils/useWindowSize';

import Socials from '../widgets/Socials';
import ProfilePic from '../layout/ProfilePic';
import StyledJumbotron from '../styled/Jumbotron';
import useSpacing from '../../utils/useSpacing';

import LinkStyled from '../styled/Link';
import NavLinkStyled from '../styled/NavLink';

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
                <NavLinkStyled to="/contact" title="Lets chat &#9749">Hire</NavLinkStyled>
                <LinkStyled ghost href="#learn-more">Learn more</LinkStyled>
            </div>
        </StyledJumbotron>
    )
}
