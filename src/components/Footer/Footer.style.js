import styled from 'styled-components';

export default styled.footer`
    text-align: center;
    background-color: var(--background-color-dark);
    color: var(--text-color-light);

    ul {
        display: grid;
        grid-auto-flow: row;
        justify-content: center;

        li a {
            display: grid;
            grid-template-columns: 200px;
            text-align: center;
            margin: 1rem 0;
            list-style: none;

            span {
                position: relative;
                text-align: center;
            }
            span i {
                position: absolute;
                right: 0;
            }
        }
    }

    address {
        text-align: start;
        background-color: var(--accent-color-prussian-blue);
        h4 {
            font-style: normal;
        }
    }

    .link-icon {
        justify-self: center;
        font-size: 2rem;
    }

    .powered-by {
        color: var(--text-color-light);
    }
`;