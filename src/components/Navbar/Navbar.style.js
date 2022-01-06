import styled, { css } from 'styled-components';

export default styled.header`
position: sticky;
top: 0;
box-shadow: 1px 1px 2px #eeeeee;
background-color: ${({theme}) => theme.bg.header};
z-index: 10;

.active {
    color: ${({theme}) => theme.accents.skyBlue};
}

nav {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: ${({theme}) => theme.bg.header};
    padding: ${({padding}) => `5px ${padding}`};
    max-width: 1200px;
    margin: 0 auto;

    img {
        cursor: pointer;
    }

    ul {
        position: absolute;
        align-items: center;
        width: 100%;
        transform: ${({ isNavOpen }) => isNavOpen ? "translateY(39px)" : "translateY(-150%)"};
        transition: 200ms ease-out;
        text-align: center;
        background-color: ${({theme}) => theme.bg.header};
        z-index: -1;

        li {
            display: grid;
            grid-template-columns: 1fr auto;
            padding: 20px 0;
            list-style: none;
            border-bottom: thin solid #eeeeee;

            a {
                display: block;
                width: 100%;
            }

            i {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                right: 0;
                height: 60px;
                width: 60px;
                align-self: center;
                background-color: #333;
                color: #fff;
                font-size: x-large;
                z-index: -1;
            }

            .twitter {
                background-color: #1A8CD8 !important;
            }

            .linkedin {
                background-color: #0077b5;
            }
        }
    }

    button {
        border: none;
        background: none;
        font-size: larger;
        cursor: pointer;
    }
}

/* Tablet size & ^ */
${({ width, theme }) => width > theme.breakpoints.mobile && css`
nav {
    grid-template-columns: auto 50%;

    ul {
        display: flex;
        position: relative;
        transform: translateY(0px);
        justify-content: end;
        align-items: center;
        z-index: 1;
        gap: 30px;

        li {
            display: inline;
            border: none;
            padding: 0;
            a {
                display: inline;
            }
            i {
                display: none;
            }
        }
    }

    button {
        display: none;
    }
}
`}
`;