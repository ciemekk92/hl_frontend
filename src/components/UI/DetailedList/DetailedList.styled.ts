import styled from 'styled-components';

interface ContainerProps {
    readonly toggle: boolean;
}

export const IconContainer = styled.div<ContainerProps>`
    margin-top: 0.5rem;
    width: 2rem;
    height: 2rem;
    display: inline-flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    ${(props) =>
        props.toggle
            ? 'transform: translateY(0.2rem) rotate(90deg);'
            : 'transform: translateY(0.2rem)'};
    cursor: pointer;
`;
