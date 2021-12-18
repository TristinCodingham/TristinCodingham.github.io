import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Link = styled.a`
font-size: 2rem;
color: var(--accent-color);
`;

export default function Socials() {
    return (
        <ul style={{display: "inline-block"}}>
            <li><Link href="https://github.com/TristinCodingham" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link></li>
            <li><Link href="https://twitter.com/Codingham" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
        </ul>
    )
}
