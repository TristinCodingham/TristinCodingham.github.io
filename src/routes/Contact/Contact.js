import React from 'react'
import Container from '../../components/Container/Container';
import ContactStyle from './Contact.style';

export default function Contact() {
    return (
        <ContactStyle>
            <form action="https://formspree.io/f/xlezeybe" method="POST">
                <Container>
                    <input type="email" name="_replyto" placeholder="Full name" />
                    <textarea name="message" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </Container>
            </form>
        </ContactStyle>
    )
}
