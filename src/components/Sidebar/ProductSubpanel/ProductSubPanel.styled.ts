import styled from 'styled-components';

export const Panel = styled.div`
    width: 100%;
    height: 3.2rem;
    transition: all 0.4s ease;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 5rem;
    color: ${(props) => props.theme.primaryDark};
    cursor: pointer;
    background-color: ${(props) => props.theme.secondaryLight};
    border-bottom: 1px solid ${(props) => props.theme.primaryDark};

    &:hover {
        background-color: ${(props) => props.theme.secondaryMedium};
    }
`;
