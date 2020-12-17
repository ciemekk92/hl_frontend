import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-style: italic;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    cursor: default;

    & > p {
        margin: 2rem 0;
    }
`;
