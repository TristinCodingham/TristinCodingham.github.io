import styled from 'styled-components';

export default styled.div`
background: url(${props => props.image});
background-size: cover;
background-position: center;
mix-blend-mode: overlay;
min-height: 60vh;
`;