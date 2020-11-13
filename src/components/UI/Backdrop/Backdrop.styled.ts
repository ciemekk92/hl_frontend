import styled from 'styled-components';

interface BackdropProps {
    readonly show: boolean;
}

export const View = styled.div<BackdropProps>`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${(props) => (props.show ? '200' : '-1')};
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: ${(props) => (props.show ? '1' : '0')};
    transition: all 0.4s ease;
`;
