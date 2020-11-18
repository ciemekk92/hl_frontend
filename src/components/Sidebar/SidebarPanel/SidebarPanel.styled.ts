import styled from 'styled-components';

export const Panel = styled.div`
    width: 100%;
    height: 3rem;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.primaryDark};
    cursor: pointer;
    background-color: ${(props) => props.theme.secondaryLight};

    &:hover {
        background-color: ${(props) => props.theme.secondaryMedium};
    }
`;
