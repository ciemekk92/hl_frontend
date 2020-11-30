import React from 'react';
import { Panel, Wrapper } from './Dropdown.styled';
import '../../../transitions/transitions.css';

interface DropdownProps {
    clicked: () => void;
    logout: () => void;
    passwordChanged: () => void;
}

//TODO: icons

const Dropdown: React.FC<DropdownProps> = (props) => {
    const { clicked, logout, passwordChanged } = props;
    return (
        <Wrapper onMouseLeave={clicked}>
            <Panel onClick={passwordChanged}>Zmień hasło</Panel>
            <Panel onClick={logout}>Wyloguj się</Panel>
        </Wrapper>
    );
};

export default Dropdown;
