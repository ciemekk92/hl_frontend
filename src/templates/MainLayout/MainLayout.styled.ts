import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-rows: 10vh max-content;
    grid-template-columns: 20rem 1fr;
    grid-gap: 0;
`;

export const Main = styled.main`
    grid-row: 2 / 3;
    grid-column: 2 /3;
    width: 100%;
    height: 100%; // TODO: Temporary
    background-color: ${(props) => props.theme.primaryLight};
    color: ${(props) => props.theme.primaryDark};
`;
