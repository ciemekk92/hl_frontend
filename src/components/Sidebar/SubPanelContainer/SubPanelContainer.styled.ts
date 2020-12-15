import styled from 'styled-components';

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
