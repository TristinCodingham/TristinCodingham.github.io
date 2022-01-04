import styled from 'styled-components';

export default styled.footer`
    text-align: center;
    background-color: ${({theme}) => theme.bg.footer};
    color: ${({theme}) => theme.fg.footer};

    ul {
        display: grid;
        grid-auto-flow: row;
        justify-content: center;
        list-style: none;
        padding: 60px 0;

        li a {
            display: grid;
            grid-template-columns: 200px;
            text-align: center;
            margin: 1rem 0;
            list-style: none;
            color: ${({theme}) => theme.fg.footer};

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
        background-color: #000;
        padding: ${({padding}) => `30px ${padding}`};
        h4 {
            font-style: normal;
        }
    }

    .link-icon {
        justify-self: center;
        font-size: 2rem;
    }

    .powered-by {
        color: ${({theme}) => theme.fg.footer};
        padding: 15px 0;

        h6 {
            font-family: 'Arty Signature';
            font-size: xx-large;
            letter-spacing: 4px;
            color: ${({theme}) => theme.accents.skyBlue};
        }
    }
`;