import styled from 'styled-components';

export const QuestionPanel = styled.div`
    width: 90%;
    max-height: 36rem;
    background-color: #eee;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: translateY(-0.3rem);
    }

    &:first-child {
        margin-top: 3rem;
    }
`;

export const QuestionLabel = styled.p`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.4rem;
`;
