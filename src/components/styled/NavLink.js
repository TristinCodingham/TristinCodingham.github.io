import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
font-family: 'Source Code Pro', sans-serif;
font-weight: bold;
text-transform: uppercase;
text-align: center;
display: block;
max-width: 200px;
margin: 1rem auto;
padding: 20px 0;
background: hsla(192, 100%, 50%, 1);
background: linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
background: -moz-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
background: -webkit-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00CEFF", endColorstr="#007EA7", GradientType=1 );

${props => props.ghost && `
color: var(--accent-color-dark);
background: none;
border: 1px solid;
`}

`;