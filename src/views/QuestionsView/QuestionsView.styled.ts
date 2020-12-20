import styled from 'styled-components';

export const QuestionPanel = styled.div`
    width: 90%;
    max-height: 48rem;
    background-color: #f6dfd0;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.4s ease;
    font-size: 1.8rem;

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
    font-size: 1.8rem;
`;

export const AnswerText = styled.p`
    font-style: italic;
`;
