import styled from 'styled-components';

interface LinkProps {
    readonly fillColor?: number;
    readonly selected?: boolean;
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
            ? '#F35D45'
            : props.fillColor === 1
            ? '#f1e36d'
            : props.fillColor === 2
            ? '#8cf187'
            : 'transparent'};
`;

export const LegendLabel = styled.p`
    font-size: 1.4rem;
    margin-right: 3rem;

    &:last-child {
        margin: 0;
    }
`;

export const LinksTable = styled.table`
    width: 96%;
    border: none;
    border-collapse: collapse;
    margin: 2rem auto 0;
    padding-bottom: 5rem;
`;

export const LinksTRow = styled.tr``;
export const LinksTHeader = styled.th<LinkProps>`
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #666;
    font-size: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    ${(props) => (props.selected ? 'box-shadow: inset 0 0 0 2px #000;' : null)};
    transition: all 0.4s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const LinksTCell = styled.td<LinkProps>`
    border: 1px solid #666;
    text-align: left;
    font-size: 1rem;
    padding: 0.3rem;
    transition: all 0.4s ease;
    background-color: ${(props) =>
        props.fillColor === 0
            ? '#f35d45'
            : props.fillColor === 1
            ? '#f1e36d'
            : props.fillColor === 2
            ? '#8cf187'
            : 'transparent'};
    ${(props) => (props.selected ? 'box-shadow: inset 0 0 0 2px #000;' : null)};

    &:first-child {
        font-weight: 700;
    }
`;

export const LinksFirstCell = styled(LinksTCell)`
    transition: all 0.4s ease;
    cursor: pointer;
    ${(props) => (props.selected ? 'box-shadow: inset 0 0 0 2px #000;' : null)};

    &:hover {
        transform: translateY(-2px);
    }
`;
