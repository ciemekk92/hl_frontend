import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 20rem; // TODO: temporary
    min-height: 90vh;
    height: max-content;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color: ${(props) => props.theme.primaryLight};
    color: ${(props) => props.theme.primaryDark};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 10vh;
    left: 0;
    box-shadow: 0.2rem 0 0.5rem rgba(0, 0, 0, 0.4);
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`;
