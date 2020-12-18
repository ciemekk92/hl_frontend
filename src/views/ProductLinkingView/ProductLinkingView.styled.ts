import styled from 'styled-components';

interface LinkProps {
    readonly fillColor?: number;
}

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
`;

export const Legend = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LegendItem = styled.div<LinkProps>`
    width: 3rem;
    height: 2rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
    border: 1px solid #666;
    background-color: ${(props) =>
        props.fillColor === 0
            ? '#e52e0e'
            : props.fillColor === 1
            ? '#f8bd0d'
            : props.fillColor === 2
            ? '#44d362'
            : '#fff'};
`;

export const LegendLabel = styled.p`
    font-size: 1.4rem;
    margin-right: 3rem;

    &:last-child {
        margin: 0;
    }
`;

export const LinksTable = styled.table`
    width: 90%;
    border: none;
    border-collapse: collapse;
    margin: 2rem auto 0;
    padding-bottom: 5rem;
`;

export const LinksTRow = styled.tr``;
export const LinksTHeader = styled.th`
    text-align: center;
    border: 1px solid #666;
    font-size: 0.8rem;
    padding-bottom: 1.6rem;
`;
export const LinksTCell = styled.td<LinkProps>`
    border: 1px solid #666;
    text-align: left;
    font-size: 0.8rem;
    padding: 0.3rem;
    background-color: ${(props) =>
        props.fillColor === 0
            ? '#e52e0e'
            : props.fillColor === 1
            ? '#f8bd0d'
            : props.fillColor === 2
            ? '#44d362'
            : '#fff'};

    &:first-child {
        font-weight: 700;
    }
`;