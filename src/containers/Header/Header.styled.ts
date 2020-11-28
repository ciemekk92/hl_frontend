import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    height: 10vh;
    background-color: ${(props) => props.theme.primaryLight};
    color: ${(props) => props.theme.primaryDark};
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
    z-index: 20;
`;

export const LogoContainer = styled.div`
    width: 15rem;
    height: 3rem;
    margin: auto 0 auto 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
    }
`;

export const ButtonsContainer = styled.div`
    height: 6rem;
    margin: auto 4rem auto 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
