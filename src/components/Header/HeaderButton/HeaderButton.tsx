import React from 'react';
import { Background } from './HeaderButton.styled';

interface ButtonProps {
    icon: JSX.Element;
    clicked: () => void;
}

const HeaderButton: React.FC<ButtonProps> = (props) => {
    const { icon, clicked } = props;
    return <Background onMouseEnter={clicked}>{icon}</Background>;
};

export default HeaderButton;
