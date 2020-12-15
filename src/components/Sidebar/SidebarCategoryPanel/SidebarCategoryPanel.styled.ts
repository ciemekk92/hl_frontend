import styled from 'styled-components';

export const Panel = styled.div`
    width: 100%;
    height: 4.2rem;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.primaryDark};
    border-bottom: 1px solid ${(props) => props.theme.primaryDark};

    &:hover {
        background-color: ${(props) => props.theme.secondaryMedium};
    }
`;
