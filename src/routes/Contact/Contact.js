import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Container from '../../components/Container/Container';
import ContactStyle from './Contact.style';

export default function Contact() {
    return (
        <ContactStyle>
            <div className="heading">
                <h1>Contact</h1>
            </div>
            <div className="form-container">
                <div className="icon-box">
                    <Container>
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
                    </Container>
                </div>
                <Container>
                    <div className="form-box">
                        <form action="https://formspree.io/f/xlezeybe" method="POST">
                            <h2>Let me know what your website goals are.</h2>
                            <div className="inputs">
                                <input type="email" name="_replyto" placeholder="Full name" />
                                <textarea name="message" placeholder="Your message"></textarea>
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </ContactStyle>
    )
}
