import React from 'react';

import styled from 'styled-components';

import profilePic from '../../assets/images/profilepic-crop.jpg';

const ProfilePicStyled = styled.div`
display: inline-block;
background: url(${profilePic});
background-size: cover;
background-position: center;
width: 60vw;
max-width: 400px;
aspect-ratio: 1/1;
clip-path: polygon(45% 0, 0 92%, 100% 100%);
transition: 200ms ease-in;
justify-self: end;

&:hover {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
`;

export default function ProfilePic() {
    return (
        <ProfilePicStyled />
    )
}
