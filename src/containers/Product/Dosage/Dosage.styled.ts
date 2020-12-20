import styled from 'styled-components';
import { IconContainer } from '../../../components/UI/DetailedList/DetailedList.styled';

export const Row = styled.div`
    width: 100%;
    display: flex;
    font-size: 1.8rem;
    align-items: center;
    justify-content: start;
    padding: 0 0 1rem 4rem;
`;

export const DosageIconContainer = styled(IconContainer)`
    display: flex;
    margin: 0 0 0 1rem;
`;

export const MainText = styled.p`
    margin: 0 0 0 1rem;
`;

export const DetailText = styled.p`
    font-size: 1.8rem;
    font-style: italic;
    margin-left: 8.5rem;
`;

export const Explanation = styled.p`
    margin-left: 4rem;
`;
