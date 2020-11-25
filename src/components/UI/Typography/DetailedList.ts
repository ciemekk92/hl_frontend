import styled from 'styled-components';

export const UnorderedList = styled.ul`
    font-size: 1.4rem;
    margin: 0 2rem;
`;

export const ListItem = styled.li`
    margin: 1rem;
`;

export const DetailsItem = styled.li`
    font-style: italic;
    list-style: none;
    margin: 0 2rem;
`;

export const ToggleDetails = styled.p`
    display: inline;
    color: ${(props) => props.theme.secondaryMedium};
    transition: all 0.4s ease;
    cursor: pointer;
    font-weight: 700;
    text-decoration: underline;

    &:hover {
        color: ${(props) => props.theme.secondaryLight};
    }
`;
