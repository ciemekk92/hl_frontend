import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${(props) => props.theme.primaryLight};
    width: 100%;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
`;

export const LoginButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const LandingLoginButton = styled.button`
    width: 15rem;
    height: 4rem;
    border: none;
    outline: none;
    text-transform: capitalize;
    font-size: 2rem;
    background-color: ${(props) => props.theme.secondaryLight};
    transition: all 0.4s ease;
    cursor: pointer;
    border-radius: 0.3rem;
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${(props) => props.theme.secondaryMedium};
        transform: translateY(-0.2rem);
        box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.5);
    }
`;
