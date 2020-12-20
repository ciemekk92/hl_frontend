import styled from 'styled-components';

interface ContainerProps {
    readonly toggle: boolean;
}

export const IconContainer = styled.div<ContainerProps>`
    width: 2.4rem;
    height: 2.4rem;
    display: inline-flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    ${(props) => (props.toggle ? 'transform: rotate(90deg);' : null)};
    cursor: pointer;
`;
