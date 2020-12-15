import styled from 'styled-components';

export const Input = styled.input`
    position: relative;
    width: 80%;
    height: 3rem;
    text-align: center;
    border-radius: 0.3rem;
    outline: none;
    border: none;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    backface-visibility: hidden;

    &:hover,
    &:focus {
        transform: scale(1.05);
        box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.4);
    }
`;
