import styled from 'styled-components';

interface PanelProps {
    readonly active: boolean;
}

export const Panel = styled.div<PanelProps>`
    width: 100%;
    height: 3.6rem;
    transition: all 0.4s ease;
    font-size: 1.4rem;
    font-weight: ${(props) => (props.active ? 700 : 400)};
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 4rem;
    color: ${(props) => props.theme.primaryDark};
    cursor: pointer;
    background-color: ${(props) => props.theme.secondaryLight};
    border-bottom: 1px solid ${(props) => props.theme.primaryDark};

    &:hover {
        background-color: ${(props) => props.theme.secondaryMedium};
    }
`;
