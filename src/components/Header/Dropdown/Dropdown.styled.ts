import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 15rem;
    height: max-content;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 5rem;
    left: -10rem;
    background-color: ${(props) => props.theme.primaryLight};
    border-radius: 0.3rem;
`;

export const Panel = styled.div`
    border-top: none;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: all 0.4s ease;

    &:last-child {
        border: none;
    }

    &:hover {
        background-color: ${(props) => props.theme.secondaryLight};
    }

    &:active {
        background-color: #bbb;
    }
`;
