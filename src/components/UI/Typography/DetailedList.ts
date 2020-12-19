import styled from 'styled-components';

export const UnorderedList = styled.ul`
    font-size: 1.8rem;
    margin: 0 5.8rem;
`;

export const ListItem = styled.li`
    margin: 1rem;
`;

export const DetailsItem = styled.li`
    font-style: italic;
    list-style: none;
    margin: 1rem 2rem;

    &:last-child {
        margin-bottom: 2rem;
    }
`;

export const ToggleDetails = styled.p`
    display: inline;
    color: ${(props) => props.theme.warningMedium};
    transition: all 0.4s ease;
    cursor: pointer;
    font-weight: 700;
    text-decoration: underline;
    margin-left: 1.2rem;

    &:hover {
        color: ${(props) => props.theme.warningDark};
    }
`;

export const Explanation = styled.p`
    list-style: none;
    font-size: 1.8rem;
    margin-left: 7rem;
`;
