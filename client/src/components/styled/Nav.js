import styled from "styled-components";

export default styled.nav`
& div {
    position: relative;
display: grid;
grid-template-columns: 1fr max-content;
align-items: center;
width: 100%;
box-shadow: 1px 0px 5px var(--text-color-grey);

/* Logo */
& > a {
    height: 50px;
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    z-index: 2;
    background-color: var(--background-color-light);
}

/* Menu */
& button {
    display: ${props => props.isDesktop && "none"};
    background-color: unset;
    border: none;
    cursor: pointer;
    padding: 0.4rem 1rem;
    z-index: 9;

    & i {
        font-size: 25px;
    }
}

& .nav-ul-mobile {
    display: ${props => props.isDesktop && "none"};
    position: absolute;
    top: 0;
    background-color: var(--background-color-light);
    width: 100%;
    transform: ${props => props.isNavOpen ? 'translateY(50px)' : 'translateY(-150%)'};
    transition: 200ms linear;
    z-index: -1;

    & li {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--text-color-grey);

        & i {
            font-size: 2rem;
        }
        
        & .fa-external-link-alt {
            font-size: 10px;
        } 
        
        & a {
            color: var(--text-color-dark);
            padding: 1.5rem 2rem;
            width: 200px;
            text-align: center;
        }

        & a:hover {
            color: var(--accent-color);
        }
    }

    & li:last-child {
        border-bottom: none;
    }
}

& .nav-ul-desktop {
    display: ${props => props.isDesktop ? "block" : "none"};
    position: ${props => props.isDesktop ? "relative" : "absolute"};

    & li {
        display: inline-block;
    }

    & a {
        color: var(--text-color-dark);
    }

    & a:hover {
        color: var(--accent-color);
    }
}
}
`;