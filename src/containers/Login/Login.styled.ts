import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    margin: 1rem 0;
    justify-content: space-evenly;
`;

export const Text = styled.p`
    font-size: 1.6rem;
    color: ${(props) => props.theme.primaryDark};
`;

export const Warning = styled.p`
    position: absolute;
    top: 7%;
    font-size: 1.6rem;
    height: 2rem;
    color: ${(props) => props.theme.warningMedium};
    margin: 0 auto;
`;
