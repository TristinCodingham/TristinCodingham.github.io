import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
font-family: 'Source Code Pro', sans-serif;
font-weight: bold;
text-transform: uppercase;
text-decoration: none;
text-align: center;
display: block;
width: 100%;
max-width: 200px;
height: 60px;
margin: 10px auto;
padding: 20px 0;
color: #fff;
background: hsla(192, 100%, 50%, 1);
background: linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
background: -moz-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
background: -webkit-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00CEFF", endColorstr="#007EA7", GradientType=1 );
transition: 200ms cubic-bezier(1, 0.63, 0.24, 2.55);

&:hover {
    font-size: larger;
}

${props => props.ghost && css`
color: #333;
background: none;
border: 1px solid;
`}
`;