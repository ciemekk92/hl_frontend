import styled from 'styled-components';

export const Button = styled.button`
    width: 15rem;
    height: 3rem;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.secondaryLight};
    color: ${(props) => props.theme.primaryDark};
    transition: all 0.4s ease;
    cursor: pointer;
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${(props) => props.theme.secondaryMedium};
        transform: translateY(-0.2rem);
        box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.5);
    }
`;
