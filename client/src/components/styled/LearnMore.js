import styled from 'styled-components';

export default styled.section`
position: relative;
top: ${props => -props.scrollYOffset * 0.1}px;
max-width: 1024px;
margin: 0 auto;
background-color: #fff;
border-radius: 15px;
transition: 200ms ease-out;

& .overview {
    background-color: var(--accent-color-prussian-blue);
    color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    & blockquote {
        max-width: 65ch;
        border: thin solid var(--accent-color-dark);
        padding: 10px 40px;
        margin-bottom: 80px;
    }
    
    & h4 {
        font-size: xx-large;
        background-color: var(--accent-color-dark);
    }

    & .toolkit {
        display: grid;
        grid-auto-flow: column;

        & ul { 
            & li {
                display: grid;
                justify-content: center;
                text-align: center;
                margin: 15px 0;
            }
        }

        svg {
            font-size: xxx-large;
            margin: 5px auto;
        }
    }
}
`;