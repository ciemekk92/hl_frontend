import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh; // TODO: temporary
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color: ${(props) => props.theme.primaryLight};
    color: ${(props) => props.theme.primaryDark};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
