import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ContactStyle from './Contact.style';
import LinkStyled from '../../components/Link/Link.styled';

import useSpacing from '../../utils/hooks/useSpacing';

export default function Contact() {
    const { padding } = useSpacing();

    return (
        <ContactStyle padding={padding}>
            <div className="heading">
                <h1>Contact</h1>
            </div>
            <div className="form-container">
                <form action="https://formspree.io/f/xlezeybe" method="POST">
                    <h2>Let me know what your website goals are.</h2>
                    <div className="details">
                        <a href="tel:0738188072">073 818 8072</a>
                        <a href="mailto:tristinc.codingham@gmail.com">tristinc.codingham@gmail.com</a>
                        <div className="icons">
                            <a className="github" href="https://github.com/TristinCodingham" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </a>
                            <a className="twitter" href="https://twitter.com/Codingham" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                            <a className="linkedin" href="https://www.linkedin.com/in/tristincodingham/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="inputs">
                        <input type="email" name="_replyto" placeholder="Full name" />
                        <textarea name="message" placeholder="Your message"></textarea>
                        <LinkStyled as="button" type="submit">Send</LinkStyled>
                    </div>
                </form>
                
            </div>
        </ContactStyle>
    )
}
