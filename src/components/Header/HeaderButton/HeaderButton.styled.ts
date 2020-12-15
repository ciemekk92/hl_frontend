import styled from 'styled-components';

export const Background = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        background-color: ${(props) => props.theme.secondaryLight};
        transform: translateY(-0.3rem);
        box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    }

    &:active {
        background-color: ${(props) => props.theme.secondaryMedium};
        transform: translateY(-0.1rem);
    }
`;
