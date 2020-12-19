import styled from 'styled-components';

interface LocationsProps {
    readonly active?: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

export const CityPanel = styled.div<LocationsProps>`
    width: 90%;
    max-height: 24rem;
    background-color: #f6dfd0;
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

export const CityLabel = styled.p`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.4rem;
`;

export const PanelRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
`;

export const IconContainer = styled.div<LocationsProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    ${(props) => (props.active ? 'transform: rotate(90deg);' : null)}
`;
