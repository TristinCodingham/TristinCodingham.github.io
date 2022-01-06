import styled from 'styled-components';

import formBackground from '../../assets/images/vania-shows-N1I6IgDOGJs-unsplash.jpg';

export default styled.main`
text-align: center;

.heading {
    display: grid;
    align-items: center;
    min-height: 30vh;
    background-color: ${({ theme }) => theme.accents.prussianBlue};
    color: #fff;

    h1 {
        font-family: 'Libre Barcode 39 Text', sans-serif;
        font-size: 2.5rem;
        font-weight: lighter;
        letter-spacing: 3px;
    }
}

.form-container {
    background: url(${formBackground});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: grid;
    align-items: center;
    min-height: 60vh;
    padding: ${({padding}) => `60px ${padding}`};

    form {
        padding: ${({padding}) => `60px ${padding}`};
        background-color: #fff;
        margin: 0 auto;
        border-radius: 15px;
        width: 100%;

        h2 {
            margin-bottom: 40px;
            max-width: 24ch;
            margin: 0 auto;
            font-size: xx-large;
        }

        .details {
            display: grid;
            gap: 5px;
            margin: 30px 0;

            .icons {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                font-size: xx-large;
                border-radius: 15px;
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

        .inputs {
            display: grid;
            gap: 10px;
            max-width: 100%;

            input, textarea {
                padding: 15px 5px;
                border: thin solid #dddddd;
            }

            button {
                border: none;
                cursor: pointer;
                max-width: 100% !important;
            }
        }
    }
}
`;