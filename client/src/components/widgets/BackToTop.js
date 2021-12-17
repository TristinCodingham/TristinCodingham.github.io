import React from 'react';

import styled from 'styled-components';

const BackToTopStyle = styled.a`
position: fixed;
border: none;
border-radius: 0px;
top: 90vh;
right: 0;
width: 50px;
height: 50px;
margin-right: ${props => props.padding};
z-index: 9;
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

& i{
    color: var(--accent-color);
}
`;

export default function BackToTop() {
    return (
        <BackToTopStyle href="#page-top" aria-label="Back to top" title='"Started from the top now we here"'>
            <i className="fas fa-chevron-up"></i>
        </BackToTopStyle>
    )
}
