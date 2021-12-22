import styled from 'styled-components';

export default styled.main`
text-align: center;

.heading {
    display: grid;
    align-items: center;
    min-height: 30vh;
    background-color: ${({ theme }) => theme.accents.prussianBlue};
    color: #fff;

    h1 {
        font-family: 'Pattaya', sans-serif;
        letter-spacing: 3px;
        font-size: 2.5rem;
    }
}

.form-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    min-height: 60vh;

    .icon-box {
        display: grid;
        align-items: center;
        height: 100%;
        background-color: ${({ theme }) => theme.accents.prussianBlue};

        .icons {
            display: grid;
            align-items: center;
            justify-content: space-evenly;
            font-size: xxx-large;
            border-radius: 15px;
            background-color: #fff;
            padding: 40px 0;
            min-width: 85px;

            .github {
                color: #333;
            }

            .twitter {
                color: #1A8CD8;
            }

            .linkedin {
                color: #0077b5;
            }
        }
    }

    .form-box {
        text-align: start;
        background-color: #fff;
        padding: 100px 60px;
        border-radius: 15px;

        form {
            h2 {
                margin-bottom: 40px;
            }
            .inputs {
                display: grid;
                gap: 10px;

                input, textarea {
                    padding: 15px 5px;
                    border: thin solid #dddddd;
                }

                button {
                    font-family: 'Source Code Pro', sans-serif;
                    font-weight: bold;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    display: block;
                    width: 100%;
                    height: 60px;
                    margin: 10px auto;
                    padding: 20px 0;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    background: hsla(192, 100%, 50%, 1);
                    background: linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
                    background: -moz-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
                    background: -webkit-linear-gradient(90deg, hsla(192, 100%, 50%, 1) 0%, hsla(195, 100%, 33%, 1) 100%);
                    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00CEFF", endColorstr="#007EA7", GradientType=1 );
                    transition: 200ms cubic-bezier(1, 0.63, 0.24, 2.55);
                }
            }
        }
    }
}
`;