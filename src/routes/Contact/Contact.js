import React from 'react';

import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

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
                        <address>
                            <small>
                                78 Mimosa Street<br />
                                Kabeljous<br />
                                Jeffreys Bay, 6330<br />
                                Eastern Cape, South Africa
                            </small>
                        </address>
                        <div className="icons">
                            <a className="github" href="https://github.com/TristinCodingham" target="_blank" rel="noreferrer">
                                <FaGithubSquare />
                            </a>
                            <a className="twitter" href="https://twitter.com/Codingham" target="_blank" rel="noreferrer">
                                <FaTwitterSquare />
                            </a>
                            <a className="linkedin" href="https://www.linkedin.com/in/tristincodingham/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
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
