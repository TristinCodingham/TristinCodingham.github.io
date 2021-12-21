import styled, { css } from 'styled-components';

export default styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: calc(100vh - 49px);

.jumbotron {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 1px 1px 10px #dddddd;
    transform: ${({ isLoaded }) => !isLoaded && "translateX(-1000px)"};
    transition: 200ms ease-out;

    .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        div {
            display: grid;
            ul {
                display: none;
                padding: 10px 0px;
                li {
                    display: inline;
                    list-style: none;
                    margin-right: 5px;
                    font-size: xx-large;
                }
            }
        }

        .github a {
            color: #333;
        }

        .twitter a {
            color: #1A8CD8;
        }

        .linkedin a {
            color: #0077b5;
        }

        h1 {
            font-family: 'Pattaya', sans-serif;
            letter-spacing: 3px;
            font-size: 2.5rem;
            max-width: 15ch;
            height: min-content;
            text-align: center;
            justify-self: center;

            span {
                color: ${({ theme }) => theme.accents.skyBlue};

                span {
                    color: ${({ theme }) => theme.accents.skyBlueShade};
                }
            }
        }
        img {
            margin: 40px auto;
            display: inline-block;
            object-fit: cover;
            object-position: center;
            width: 60vw;
            max-width: 400px;
            aspect-ratio: 1/1;
            clip-path: polygon(45% 0, 0 92%, 100% 100%);
            transition: 200ms cubic-bezier(1, 0.63, 0.24, 2.55);

            &:hover {
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
        }
    }

    .info {
        p {
            font-size: x-large;
            text-align: center;
            max-width: 600px;
        }
    }
}

/* Tablet size & ^ */
${({ width, theme }) => width > theme.breakpoints.mobile && css`
    .jumbotron {
        .heading {
            flex-direction: row-reverse;

            div ul {
                display: block;
            }
        
            h1 {
                display: inline-block;
                text-align: start;
                justify-self: start;
            }
        }
    }
`}
`;