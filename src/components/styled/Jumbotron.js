import styled from 'styled-components';
export default styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: var(--accent-color-prussian-blue);
color: #fff;
padding: ${props => `110px ${props.padding}`};

& .header {
    display: flex; 
    flex-direction: ${props => props.isDesktop === true ? "row-reverse" : "column"};
    align-items: center;
    justify-content: center;

    & h1 {
        margin-bottom: ${props => props.isDesktop === false && "60px"};
    }

    & .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
}

& .intro {
    margin-top: 60px;

    & p {
        font-weight: bold;
        font-size: larger;
    }
}
`;