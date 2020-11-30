import React from 'react';
import { Button } from './ModalButton.styled';

interface LoginButtonProps {
    clicked: () => void;
}

const ModalButton: React.FC<LoginButtonProps> = (props) => {
    const { clicked } = props;

    return <Button onClick={clicked}>{props.children}</Button>;
};

export default ModalButton;
