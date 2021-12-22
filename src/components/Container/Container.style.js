import styled from 'styled-components';

export default styled.div`
display: grid;
width: 100%;
max-width: 1024px;
padding: ${({ padding }) => `30px ${padding}`};
`;