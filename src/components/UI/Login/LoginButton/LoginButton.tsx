import React from 'react';
import { Button } from './LoginButton.styled';

interface LoginButtonProps {
    clicked: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
    const { clicked } = props;

    return <Button onClick={clicked}>{props.children}</Button>;
};

export default LoginButton;
